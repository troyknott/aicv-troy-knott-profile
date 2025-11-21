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
        <nav style={{ marginBottom: '2rem' }}>
          <Link href="/" className="nav-link">← Back to Home</Link>
        </nav>
        
        <header className="hero">
          <h1>Frequently Asked Questions</h1>
          <p style={{ fontSize: '1.125rem', opacity: '0.9' }}>
            Common questions about {profileData.name}
          </p>
        </header>

        <section>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {profileData.faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <div className="faq-question">{faq.question}</div>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link href={`/profile/${profileData.slug}`} className="btn">
            View Full Profile →
          </Link>
        </section>
      </main>
    </>
  )
}


