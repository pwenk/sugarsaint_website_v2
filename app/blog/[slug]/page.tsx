import { getArticleBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  // Extract TL;DR from content
  const tldrMatch = article.content.match(/## TL;DR\n\n(.+?)(?=\n\n---)/s);
  const description = tldrMatch ? tldrMatch[1].trim() : "";

  return {
    title: `${article.metadata.title} | SugarSaint`,
    description,
    keywords: article.metadata.keyword,
    openGraph: {
      title: article.metadata.title,
      description,
      type: "article",
      publishedTime: article.metadata.date,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Extract FAQ section for schema markup
  const faqMatch = article.content.match(/## FAQ\n\n([\s\S]*?)(?=\n---)/);
  const faqSection = faqMatch ? faqMatch[1] : "";
  const faqItems = [];

  // Parse FAQ questions and answers
  const faqRegex = /\*\*Q: (.+?)\*\*\nA: (.+?)(?=\n\n|\*\*Q:|$)/gs;
  let match;
  while ((match = faqRegex.exec(faqSection)) !== null) {
    faqItems.push({
      question: match[1].trim(),
      answer: match[2].trim(),
    });
  }

  // Generate JSON-LD schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.metadata.title,
    datePublished: article.metadata.date,
    author: {
      "@type": "Organization",
      name: "SugarSaint",
    },
    publisher: {
      "@type": "Organization",
      name: "SugarSaint",
    },
    keywords: article.metadata.keyword,
  };

  const faqSchema = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <SiteHeader />
      <article className="min-h-screen bg-cream">
        {/* Article Header */}
        <header className="border-b border-charcoal/10 bg-cream py-12 md:py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center text-gold hover:underline"
            >
              ← Back to Blog
            </Link>
            <div className="mb-4 text-charcoal/60 text-sm">
              {article.metadata.cluster} •{" "}
              {new Date(article.metadata.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <h1 className="font-semibold text-4xl text-charcoal md:text-5xl">
              {article.metadata.title}
            </h1>
          </div>
        </header>

        {/* Article Content */}
        <div className="py-12 md:py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="mb-6 font-semibold text-3xl text-charcoal md:text-4xl">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mb-4 mt-12 font-semibold text-2xl text-charcoal md:text-3xl">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mb-3 mt-8 font-semibold text-xl text-charcoal md:text-2xl">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-6 text-charcoal/80 text-lg leading-relaxed">
                      {children}
                    </p>
                  ),
                  em: ({ children }) => (
                    <em className="not-italic block my-8 border-l-4 border-gold bg-gold/5 py-4 px-6 font-medium text-charcoal text-lg italic">
                      {children}
                    </em>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-charcoal">
                      {children}
                    </strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-6 ml-6 list-disc space-y-2">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-6 ml-6 list-decimal space-y-2">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-charcoal/80 text-lg">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="my-6 border-l-4 border-gold py-2 pl-6 italic text-charcoal/70">
                      {children}
                    </blockquote>
                  ),
                  hr: () => <hr className="my-12 border-t border-charcoal/20" />,
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-gold underline hover:text-amber"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
