import prisma from "@/app/lib/prisma";

export const revalidate = 3600;

const baseUrl = "https://wesolewygibasy.pl";

const staticPages = [
  { path: "/", priority: 1.0 },
  { path: "/zapisy", priority: 0.9 },
  { path: "/zlobki", priority: 0.9 },
  { path: "/zlobki/glogera", priority: 0.8 },
  { path: "/zlobki/vetulaniego", priority: 0.8 },
  { path: "/zlobki/sliczna", priority: 0.8 },
  { path: "/zlobki/stanczyka", priority: 0.8 },
  { path: "/zlobki/lokietka", priority: 0.8 },
  { path: "/cennik", priority: 0.8 },
  { path: "/jadlospis", priority: 0.7 },
  { path: "/adaptacja", priority: 0.7 },
  { path: "/plan-dnia", priority: 0.7 },
  { path: "/informacje-dla-rodzicow", priority: 0.7 },
  { path: "/o-nas", priority: 0.7 },
  { path: "/galeria", priority: 0.6 },
  { path: "/blog", priority: 0.6 },
  { path: "/polityka-cookies", priority: 0.3 },
];

export default async function sitemap() {
  const staticEntries = staticPages.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: priority >= 0.9 ? "weekly" : "monthly",
    priority,
  }));

  let posts = [];
  try {
    posts = await prisma.post.findMany({
      where: { status: "published" },
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
    });
  } catch (e) {
    console.error("Sitemap: błąd pobierania wpisów", e);
  }

  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
