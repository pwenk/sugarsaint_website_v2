import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/blog'

/**
 * Dynamic sitemap generator for SugarSaint website
 *
 * This generates the sitemap automatically based on:
 * - Static pages (homepage, blog, privacy, quiz)
 * - Dynamic blog articles from blog/articles/*.md
 *
 * Next.js will automatically serve this at /sitemap.xml
 *
 * Note: This replaces the static public/sitemap.xml file.
 * You can remove public/sitemap.xml once this is deployed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sugarsaint.bio'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic blog articles
  const articles = getAllArticles()
  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.metadata.slug}`,
    lastModified: new Date(article.metadata.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Combine static and dynamic pages
  return [...staticPages, ...blogPages]
}
