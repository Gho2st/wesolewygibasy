"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import ImageExtension from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import FontFamily from "@tiptap/extension-font-family";
import { Color } from "@tiptap/extension-color";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { Extension } from "@tiptap/core";
import {
  Bold,
  Italic,
  Strikethrough,
  Underline as UnderlineIcon,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Minus,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo,
  Redo,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

const FontSize = Extension.create({
  name: "fontSize",
  addOptions() {
    return { types: ["textStyle"] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (el) => el.style.fontSize?.replace(/['"]+/g, "") || null,
            renderHTML: (attrs) => {
              if (!attrs.fontSize) return {};
              return { style: `font-size: ${attrs.fontSize}` };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize:
        (size) =>
        ({ chain }) =>
          chain().setMark("textStyle", { fontSize: size }).run(),
      unsetFontSize:
        () =>
        ({ chain }) =>
          chain()
            .setMark("textStyle", { fontSize: null })
            .removeEmptyTextStyle()
            .run(),
    };
  },
});

const FONT_SIZES = [
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "24px",
  "28px",
  "32px",
];
const COLORS = [
  { label: "Czarny", value: "#111111" },
  { label: "Szary", value: "#6b7280" },
  { label: "Czerwony", value: "#dc2626" },
  { label: "Niebieski", value: "#2563eb" },
  { label: "Zielony", value: "#16a34a" },
  { label: "Brązowy", value: "#92400e" },
];

export default function RichEditor({ value, onChange }) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      TextStyle,
      FontSize,
      FontFamily,
      Color,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      ImageExtension.configure({ inline: false, allowBase64: false }),
      LinkExtension.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: "Zacznij pisać…" }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt("Wklej URL zdjęcia:");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const addLink = () => {
    const prev = editor.getAttributes("link").href;
    const url = window.prompt("URL linku:", prev || "https://");
    if (url === null) return;
    if (url === "") editor.chain().focus().unsetLink().run();
    else editor.chain().focus().setLink({ href: url }).run();
  };

  const ToolBtn = ({ icon: Icon, action, active, title, disabled }) => (
    <button
      type="button"
      onClick={action}
      title={title}
      disabled={disabled}
      className={`p-1.5 rounded-md transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
        active
          ? "bg-red-50 text-red-700"
          : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      <Icon size={15} />
    </button>
  );

  const Sep = () => <div className="w-px h-5 bg-gray-200 mx-1 shrink-0" />;

  return (
    <div className="border border-gray-200 rounded-xl  bg-white relative">
      <div className="flex flex-wrap items-center gap-px p-2 border-b border-gray-100 bg-gray-50 sticky top-0 z-10">
        <ToolBtn
          icon={Undo}
          action={() => editor.chain().focus().undo().run()}
          title="Cofnij"
          disabled={!editor.can().undo()}
        />
        <ToolBtn
          icon={Redo}
          action={() => editor.chain().focus().redo().run()}
          title="Ponów"
          disabled={!editor.can().redo()}
        />
        <Sep />

        <select
          title="Rozmiar czcionki"
          onChange={(e) => {
            if (e.target.value)
              editor.chain().focus().setFontSize(e.target.value).run();
            else editor.chain().focus().unsetFontSize().run();
          }}
          className="text-xs text-gray-600 bg-white border border-gray-200 rounded-md px-1.5 py-1 focus:outline-none hover:border-gray-400 transition-colors"
        >
          <option value="">Rozmiar</option>
          {FONT_SIZES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <Sep />

        <ToolBtn
          icon={Bold}
          action={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
          title="Pogrubienie"
        />
        <ToolBtn
          icon={Italic}
          action={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
          title="Kursywa"
        />
        <ToolBtn
          icon={UnderlineIcon}
          action={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive("underline")}
          title="Podkreślenie"
        />
        <ToolBtn
          icon={Strikethrough}
          action={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive("strike")}
          title="Przekreślenie"
        />
        <ToolBtn
          icon={Code}
          action={() => editor.chain().focus().toggleCode().run()}
          active={editor.isActive("code")}
          title="Kod"
        />
        <Sep />

        <div className="relative group">
          <button
            type="button"
            title="Kolor tekstu"
            className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 transition-colors flex items-center gap-1"
          >
            <span
              className="text-xs font-bold"
              style={{
                color: editor.getAttributes("textStyle").color || "#111",
              }}
            >
              A
            </span>
            <span className="text-gray-300 text-xs">▾</span>
          </button>
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg p-2 hidden group-hover:flex flex-col gap-1 z-10 min-w-[120px]">
            {COLORS.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => editor.chain().focus().setColor(c.value).run()}
                className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-50 text-xs text-gray-700"
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: c.value }}
                />
                {c.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => editor.chain().focus().unsetColor().run()}
              className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-50 text-xs text-gray-400 border-t border-gray-100 mt-1 pt-2"
            >
              Usuń kolor
            </button>
          </div>
        </div>
        <Sep />

        <ToolBtn
          icon={Heading2}
          action={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          active={editor.isActive("heading", { level: 2 })}
          title="Nagłówek H2"
        />
        <ToolBtn
          icon={Heading3}
          action={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          active={editor.isActive("heading", { level: 3 })}
          title="Nagłówek H3"
        />
        <Sep />

        <ToolBtn
          icon={AlignLeft}
          action={() => editor.chain().focus().setTextAlign("left").run()}
          active={editor.isActive({ textAlign: "left" })}
          title="Do lewej"
        />
        <ToolBtn
          icon={AlignCenter}
          action={() => editor.chain().focus().setTextAlign("center").run()}
          active={editor.isActive({ textAlign: "center" })}
          title="Wyśrodkuj"
        />
        <ToolBtn
          icon={AlignRight}
          action={() => editor.chain().focus().setTextAlign("right").run()}
          active={editor.isActive({ textAlign: "right" })}
          title="Do prawej"
        />
        <Sep />

        <ToolBtn
          icon={List}
          action={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
          title="Lista punktowana"
        />
        <ToolBtn
          icon={ListOrdered}
          action={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
          title="Lista numerowana"
        />
        <ToolBtn
          icon={Quote}
          action={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
          title="Cytat"
        />
        <ToolBtn
          icon={Minus}
          action={() => editor.chain().focus().setHorizontalRule().run()}
          title="Linia pozioma"
        />
        <Sep />

        <ToolBtn
          icon={LinkIcon}
          action={addLink}
          active={editor.isActive("link")}
          title="Link"
        />
        <ToolBtn icon={ImageIcon} action={addImage} title="Zdjęcie (URL)" />
      </div>

      <EditorContent
        editor={editor}
        className="
          px-5 py-4 min-h-[320px] text-sm text-gray-800 leading-relaxed
          [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[300px]

          [&_.ProseMirror_h2]:text-xl [&_.ProseMirror_h2]:font-semibold [&_.ProseMirror_h2]:mt-6 [&_.ProseMirror_h2]:mb-3
          [&_.ProseMirror_h3]:text-lg [&_.ProseMirror_h3]:font-semibold [&_.ProseMirror_h3]:mt-5 [&_.ProseMirror_h3]:mb-2

          [&_.ProseMirror_p]:my-4 [&_.ProseMirror_p]:leading-relaxed

          [&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:pl-6 [&_.ProseMirror_ul]:my-4 [&_.ProseMirror_ul]:space-y-1
          [&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:pl-6 [&_.ProseMirror_ol]:my-4 [&_.ProseMirror_ol]:space-y-1
          [&_.ProseMirror_li]:pl-1
          [&_.ProseMirror_li::marker]:text-gray-400 [&_.ProseMirror_li::marker]:font-medium
          [&_.ProseMirror_ul_ul]:list-[circle] [&_.ProseMirror_ul_ul]:my-1
          [&_.ProseMirror_ol_ol]:list-[lower-alpha] [&_.ProseMirror_ol_ol]:my-1

          [&_.ProseMirror_blockquote]:border-l-2 [&_.ProseMirror_blockquote]:border-red-200 [&_.ProseMirror_blockquote]:pl-4 [&_.ProseMirror_blockquote]:italic [&_.ProseMirror_blockquote]:text-gray-500 [&_.ProseMirror_blockquote]:my-5
          [&_.ProseMirror_code]:bg-gray-100 [&_.ProseMirror_code]:px-1.5 [&_.ProseMirror_code]:py-0.5 [&_.ProseMirror_code]:rounded [&_.ProseMirror_code]:text-xs [&_.ProseMirror_code]:font-mono
          [&_.ProseMirror_hr]:border-gray-200 [&_.ProseMirror_hr]:my-6
          [&_.ProseMirror_img]:rounded-xl [&_.ProseMirror_img]:max-w-full [&_.ProseMirror_img]:my-5
          [&_.ProseMirror_a]:text-red-700 [&_.ProseMirror_a]:underline

          [&_.ProseMirror_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]
          [&_.ProseMirror_p.is-editor-empty:first-child::before]:text-gray-300
          [&_.ProseMirror_p.is-editor-empty:first-child::before]:pointer-events-none
          [&_.ProseMirror_p.is-editor-empty:first-child::before]:float-left
          [&_.ProseMirror_p.is-editor-empty:first-child::before]:h-0
        "
      />

      <div className="px-5 py-2 border-t border-gray-100 bg-gray-50 flex justify-end">
        <span className="text-xs text-gray-300">
          {editor.getText().length} znaków
        </span>
      </div>
    </div>
  );
}
