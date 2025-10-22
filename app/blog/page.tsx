import { getAllArticles } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | SugarSaint",
  description:
    "Evidence-based articles about PUFAs, metabolism, thyroid health, and hormones. Learn how to optimize your metabolic health through diet and self-experimentation.",
};

export default function BlogIndex() {
  const articles = getAllArticles();

  // Group articles by cluster
  const articlesByCluster = articles.reduce(
    (acc, article) => {
      const cluster = article.metadata.cluster;
      if (!acc[cluster]) {
        acc[cluster] = [];
      }
      acc[cluster].push(article);
      return acc;
    },
    {} as Record<string, typeof articles>
  );

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="border-b border-charcoal/10 bg-cream py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="mb-6 text-center font-semibold text-5xl text-charcoal md:text-6xl">
            SugarSaint Blog
          </h1>
          <p className="mx-auto max-w-2xl text-center text-charcoal/70 text-lg">
            Evidence-based articles about PUFAs, metabolism, thyroid health, and
            hormones. No BS. No dogma. Just practical information you can test
            yourself.
          </p>
        </div>
      </section>

      {/* Articles by Cluster */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {Object.entries(articlesByCluster).map(([cluster, clusterArticles]) => (
            <div key={cluster} className="mb-16">
              <h2 className="mb-8 border-b border-charcoal/20 pb-4 font-semibold text-2xl text-charcoal md:text-3xl">
                {cluster}
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {clusterArticles.map((article) => (
                  <Link
                    key={article.metadata.slug}
                    href={`/blog/${article.metadata.slug}`}
                    className="group block rounded-lg border border-charcoal/10 bg-white p-6 transition-all hover:border-gold hover:shadow-lg"
                  >
                    <h3 className="mb-3 font-semibold text-charcoal text-xl group-hover:text-gold">
                      {article.metadata.title}
                    </h3>
                    <p className="mb-4 text-charcoal/60 text-sm">
                      {new Date(article.metadata.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <div className="flex items-center text-gold text-sm">
                      Read article →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
