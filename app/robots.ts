import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://troyknott.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Allow Google Search (Googlebot)
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // Control Google AI training separately (Google-Extended)
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      // Allow OpenAI search/citation crawlers
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Block OpenAI training crawler (GPTBot)
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      // Block Anthropic training crawlers
      {
        userAgent: 'ClaudeBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
      },
      // Allow Perplexity search crawler
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Allow Meta search crawler
      {
        userAgent: 'Meta-ExternalAgent',
        allow: '/',
      },
      // Allow Amazonbot for product discovery
      {
        userAgent: 'Amazonbot',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}


