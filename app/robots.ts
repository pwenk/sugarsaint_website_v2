import { MetadataRoute } from 'next'

/**
 * Dynamic robots.txt generator for SugarSaint website
 *
 * This tells search engines:
 * - Which pages they can crawl
 * - Which pages to avoid (API routes, protected pages)
 * - Where to find the sitemap
 *
 * Next.js will automatically serve this at /robots.txt
 *
 * Note: This can work alongside the static public/robots.txt file,
 * but the dynamic version takes precedence in Next.js.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/quiz/email',
          '/quiz/results',
          '/payment/',
        ],
      },
    ],
    sitemap: 'https://sugarsaint.bio/sitemap.xml',
  }
}
