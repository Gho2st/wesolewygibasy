import { blogPosts } from "./data/blogData";

const staticPaths = [
  "/",
  "/zapisy",
  "/cennik-i-jadlospis-w-zlobku",
  "/adaptacja-w-zlobku",
  "/plan-dnia-w-zlobku",
  "/informacje-dla-rodzicow",
  "/o-nas",
  "/galeria",
  "/zlobki",
  "/zlobki/glogera",
  "/zlobki/vetulaniego",
  "/zlobki/sliczna",
  "/zlobki/stanczyka",
  "/zlobki/lokietka",
];

const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);

export default function sitemap() {
  const baseUrl = "https://wesolewygibasy.pl";

  const paths = [...staticPaths, ...blogPaths];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      path === "/"
        ? 1
        : path.startsWith("/zlobki/lokietka")
        ? 0.9
        : path === "/zapisy"
        ? 0.9
        : 0.8,
  }));
}
