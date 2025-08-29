import Blog from "@/app/blog/Blog";

export const metadata = {
  title: "Blog - Żłobek Wesołe Wygibasy w Krakowie",
  description:
    "Porady dla rodziców, rozwój dziecka, adaptacja w żłobku i inspiracje wychowawcze. Przeczytaj artykuły Żłobka Wesołe Wygibasy w Krakowie.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Blog />
    </>
  );
}
