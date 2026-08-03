import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { requireAdmin } from "@/app/lib/auth";
import { revalidatePath } from "next/cache";

function revalidateBlog(...slugs) {
  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");
  for (const s of new Set(slugs.filter(Boolean))) revalidatePath(`/blog/${s}`);
}

async function guard(params) {
  if (!(await requireAdmin())) {
    return {
      error: NextResponse.json({ error: "Brak dostępu" }, { status: 401 }),
    };
  }
  const id = Number(params.id);
  if (!Number.isInteger(id)) {
    return {
      error: NextResponse.json({ error: "Nieprawidłowe id" }, { status: 400 }),
    };
  }
  return { id };
}

export async function GET(req, { params }) {
  const { error, id } = await guard(params);
  if (error) return error;

  const post = await prisma.post.findUnique({ where: { id } });
  if (!post)
    return NextResponse.json({ error: "Nie znaleziono" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(req, { params }) {
  const { error, id } = await guard(params);
  if (error) return error;

  const existing = await prisma.post.findUnique({
    where: { id },
    select: { slug: true },
  });
  if (!existing)
    return NextResponse.json({ error: "Nie znaleziono" }, { status: 404 });

  const body = await req.json();
  const { title, slug, content, status, publishedAt } = body;

  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        slug,
        content,
        excerpt: body.excerpt || null,
        coverImage: body.coverImage || null,
        status,
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

    revalidateBlog(existing.slug, post.slug);
    return NextResponse.json(post);
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

export async function DELETE(req, { params }) {
  const { error, id } = await guard(params);
  if (error) return error;

  const post = await prisma.post.findUnique({
    where: { id },
    select: { slug: true },
  });
  if (!post)
    return NextResponse.json({ error: "Nie znaleziono" }, { status: 404 });

  await prisma.post.delete({ where: { id } });

  revalidateBlog(post.slug);
  return NextResponse.json({ success: true });
}
