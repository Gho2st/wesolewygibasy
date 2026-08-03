import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { requireAdmin } from "@/app/lib/auth";
import { revalidatePath } from "next/cache";

function revalidateBlog(slug) {
  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");
  if (slug) revalidatePath(`/blog/${slug}`);
}

export async function GET() {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Brak dostępu" }, { status: 401 });
  }

  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(posts);
}

export async function POST(req) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Brak dostępu" }, { status: 401 });
  }

  const body = await req.json();
  const { title, slug, content, status, publishedAt } = body;

  if (!title || !slug || !content) {
    return NextResponse.json(
      { error: "Brakuje wymaganych pól" },
      { status: 400 },
    );
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        excerpt: body.excerpt || null,
        coverImage: body.coverImage || null,
        status: status || "draft",
        publishedAt:
          status === "published"
            ? publishedAt
              ? new Date(publishedAt)
              : new Date()
            : null,
        ctaTitle: body.ctaTitle || null,
        ctaDescription: body.ctaDescription || null,
        ctaPrimaryLabel: body.ctaPrimaryLabel || null,
        ctaPrimaryUrl: body.ctaPrimaryUrl || null,
        ctaSecondaryLabel: body.ctaSecondaryLabel || null,
        ctaSecondaryUrl: body.ctaSecondaryUrl || null,
      },
    });

    revalidateBlog(post.slug);
    return NextResponse.json(post, { status: 201 });
  } catch (e) {
    if (e.code === "P2002") {
      return NextResponse.json(
        { error: "Ten slug już istnieje" },
        { status: 409 },
      );
    }
    throw e;
  }
}
