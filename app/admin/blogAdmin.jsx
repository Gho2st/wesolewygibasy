"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Plus, Pencil, Trash2, Eye, ArrowLeft, Save } from "lucide-react";
import RichEditor from "@/components/RichEditor";

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/ą/g, "a")
    .replace(/ć/g, "c")
    .replace(/ę/g, "e")
    .replace(/ł/g, "l")
    .replace(/ń/g, "n")
    .replace(/ó/g, "o")
    .replace(/ś/g, "s")
    .replace(/ź/g, "z")
    .replace(/ż/g, "z")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  status: "draft",
  publishedAt: "",
  ctaTitle: "",
  ctaDescription: "",
  ctaPrimaryLabel: "",
  ctaPrimaryUrl: "",
  ctaSecondaryLabel: "",
  ctaSecondaryUrl: "",
};

// ====================== LISTA WPISÓW ======================
function BlogList({ onNew, onEdit }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch("/api/blog");
    const data = await res.json();
    setPosts(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id, title) => {
    if (!confirm(`Usunąć wpis "${title}"?`)) return;
    const res = await fetch(`/api/blog/${id}`, { method: "DELETE" });
    if (res.ok) {
      toast.success("Wpis usunięty");
      fetchPosts();
    } else {
      toast.error("Błąd usuwania");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            Panel admina
          </p>
          <h2 className="text-2xl font-medium text-gray-900">Blog</h2>
        </div>
        <button
          onClick={onNew}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <Plus size={16} />
          Nowy wpis
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col gap-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-16 bg-gray-100 rounded-xl animate-pulse"
            />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-sm mb-4">Brak wpisów. Dodaj pierwszy!</p>
          <button
            onClick={onNew}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Plus size={16} />
            Nowy wpis
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between px-5 py-4 gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {post.title}
                  </h3>
                  <span
                    className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${
                      post.status === "published"
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {post.status === "published" ? "Opublikowany" : "Szkic"}
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString("pl-PL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  {" · "}
                  <span className="font-mono text-gray-300">
                    /blog/{post.slug}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {post.status === "published" && (
                  <a
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    title="Podgląd"
                  >
                    <Eye size={15} />
                  </a>
                )}
                <button
                  onClick={() => onEdit(post)}
                  className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  title="Edytuj"
                >
                  <Pencil size={15} />
                </button>
                <button
                  onClick={() => handleDelete(post.id, post.title)}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Usuń"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ====================== FORMULARZ ======================
function BlogForm({ post, onBack }) {
  const isEdit = !!post;
  const [form, setForm] = useState(
    isEdit
      ? {
          title: post.title || "",
          slug: post.slug || "",
          excerpt: post.excerpt || "",
          content: post.content || "",
          coverImage: post.coverImage || "",
          status: post.status || "draft",
          publishedAt: post.publishedAt
            ? new Date(post.publishedAt).toISOString().split("T")[0]
            : "",
          ctaTitle: post.ctaTitle || "",
          ctaDescription: post.ctaDescription || "",
          ctaPrimaryLabel: post.ctaPrimaryLabel || "",
          ctaPrimaryUrl: post.ctaPrimaryUrl || "",
          ctaSecondaryLabel: post.ctaSecondaryLabel || "",
          ctaSecondaryUrl: post.ctaSecondaryUrl || "",
        }
      : emptyForm,
  );
  const [saving, setSaving] = useState(false);
  const [slugManual, setSlugManual] = useState(isEdit);

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setForm((f) => ({
      ...f,
      title,
      slug: slugManual ? f.slug : generateSlug(title),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.slug || !form.content) {
      return toast.error("Wypełnij tytuł, slug i treść");
    }

    setSaving(true);
    const res = await fetch(isEdit ? `/api/blog/${post.id}` : "/api/blog", {
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      toast.success(isEdit ? "Wpis zaktualizowany" : "Wpis utworzony");
      onBack();
    } else {
      const err = await res.json();
      toast.error(err.error || "Błąd zapisu");
    }
    setSaving(false);
  };

  const fieldClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors";

  return (
    <div>
      {/* Nagłówek */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={onBack}
          className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            Blog
          </p>
          <h2 className="text-2xl font-medium text-gray-900">
            {isEdit ? "Edytuj wpis" : "Nowy wpis"}
          </h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-3xl">
        {/* Tytuł */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
            Tytuł *
          </label>
          <input
            type="text"
            value={form.title}
            onChange={handleTitleChange}
            placeholder="np. Jak wplywa na dzieci dogoterapia"
            className={fieldClass}
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
            Slug (URL) *
          </label>
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-gray-400 transition-colors">
            <span className="px-3 py-3 text-xs text-gray-400 bg-gray-50 border-r border-gray-200 shrink-0">
              /blog/
            </span>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => {
                setSlugManual(true);
                setForm((f) => ({ ...f, slug: e.target.value }));
              }}
              className="flex-1 px-3 py-3 text-sm text-gray-900 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Zajawka */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
            Krótki opis (zajawka)
          </label>
          <textarea
            value={form.excerpt}
            onChange={(e) =>
              setForm((f) => ({ ...f, excerpt: e.target.value }))
            }
            placeholder="Wyświetlany na liście wpisów i w Google..."
            rows={2}
            className={`${fieldClass} resize-none`}
          />
        </div>

        {/* Zdjęcie */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
            URL zdjęcia głównego
          </label>
          <input
            type="text"
            value={form.coverImage}
            onChange={(e) =>
              setForm((f) => ({ ...f, coverImage: e.target.value }))
            }
            placeholder="https://..."
            className={fieldClass}
          />
          {form.coverImage && (
            <img
              src={form.coverImage}
              alt="Podgląd"
              className="mt-3 h-32 w-full object-cover rounded-xl border border-gray-100"
            />
          )}
        </div>

        {/* Treść */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
            Treść *
          </label>
          <RichEditor
            value={form.content}
            onChange={(html) => setForm((f) => ({ ...f, content: html }))}
          />
        </div>

        {/* CTA */}
        <div className="p-4 bg-gray-50 rounded-xl flex flex-col gap-4">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">
            Sekcja CTA (na końcu wpisu)
          </p>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
              Tytuł CTA
            </label>
            <input
              type="text"
              value={form.ctaTitle}
              onChange={(e) =>
                setForm((f) => ({ ...f, ctaTitle: e.target.value }))
              }
              placeholder="np. Po zwiedzaniu czas na coś dobrego"
              className={fieldClass}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
              Opis CTA
            </label>
            <textarea
              value={form.ctaDescription}
              onChange={(e) =>
                setForm((f) => ({ ...f, ctaDescription: e.target.value }))
              }
              placeholder="Krótki tekst zachęcający..."
              rows={2}
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Tekst przycisku 1
              </label>
              <input
                type="text"
                value={form.ctaPrimaryLabel}
                onChange={(e) =>
                  setForm((f) => ({ ...f, ctaPrimaryLabel: e.target.value }))
                }
                placeholder="np. Zobacz park"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                URL przycisku 1
              </label>
              <input
                type="text"
                value={form.ctaPrimaryUrl}
                onChange={(e) =>
                  setForm((f) => ({ ...f, ctaPrimaryUrl: e.target.value }))
                }
                placeholder="/park lub https://..."
                className={fieldClass}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Tekst przycisku 2
              </label>
              <input
                type="text"
                value={form.ctaSecondaryLabel}
                onChange={(e) =>
                  setForm((f) => ({ ...f, ctaSecondaryLabel: e.target.value }))
                }
                placeholder="np. Zarezerwuj stolik"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                URL przycisku 2
              </label>
              <input
                type="text"
                value={form.ctaSecondaryUrl}
                onChange={(e) =>
                  setForm((f) => ({ ...f, ctaSecondaryUrl: e.target.value }))
                }
                placeholder="/restauracja lub https://..."
                className={fieldClass}
              />
            </div>
          </div>
        </div>

        {/* Status + data */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
              Status
            </label>
            <select
              value={form.status}
              onChange={(e) =>
                setForm((f) => ({ ...f, status: e.target.value }))
              }
              className={fieldClass}
            >
              <option value="draft">Szkic</option>
              <option value="published">Opublikowany</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
              Data publikacji
            </label>
            <input
              type="date"
              value={form.publishedAt}
              onChange={(e) =>
                setForm((f) => ({ ...f, publishedAt: e.target.value }))
              }
              className={fieldClass}
            />
          </div>
        </div>

        {/* Przyciski */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Save size={16} />
            {saving
              ? "Zapisywanie..."
              : isEdit
                ? "Zapisz zmiany"
                : "Utwórz wpis"}
          </button>
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 border border-gray-200 hover:bg-gray-100 text-gray-600 text-sm font-medium rounded-lg transition-colors"
          >
            Anuluj
          </button>
        </div>
      </form>
    </div>
  );
}

// ====================== GŁÓWNY KOMPONENT ======================
export default function BlogAdmin() {
  const [view, setView] = useState("list"); // "list" | "new" | "edit"
  const [editPost, setEditPost] = useState(null);

  const handleEdit = (post) => {
    setEditPost(post);
    setView("edit");
  };

  const handleBack = () => {
    setEditPost(null);
    setView("list");
  };

  if (view === "new") return <BlogForm onBack={handleBack} />;
  if (view === "edit") return <BlogForm post={editPost} onBack={handleBack} />;
  return <BlogList onNew={() => setView("new")} onEdit={handleEdit} />;
}
