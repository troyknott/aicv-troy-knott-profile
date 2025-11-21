import Link from 'next/link'
import profileData from '@/data/profile.json'
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: `Frequently Asked Questions - ${profileData.name}`,
  description: `Common questions about ${profileData.name}, ${profileData.title} of ${profileData.organization.name}.`,
}

function generateFAQSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://troyknott.com'
  const faqUrl = `${siteUrl}/faq`

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: profileData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export default function FAQPage() {
  const faqSchema = generateFAQSchema()

  return (
    <>
      <JsonLd data={faqSchema} />
      <main className="container">
        <header>
          <nav style={{ marginBottom: '2rem' }}>
            <Link href="/">← Back to Home</Link>
          </nav>
          <h1>Frequently Asked Questions</h1>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            Common questions about {profileData.name}
          </p>
        </header>

        <section>
          <dl style={{ display: 'grid', gap: '2rem' }}>
            {profileData.faqs.map((faq, idx) => (
              <div key={idx}>
                <dt style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                  {faq.question}
                </dt>
                <dd style={{ marginLeft: '0' }}>{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <p>
            <Link href={`/profile/${profileData.slug}`}>
              View full profile →
            </Link>
          </p>
        </section>
      </main>
    </>
  )
}


