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
        
        <header className="hero" style={{ padding: '3rem 2rem' }}>
          <h1 style={{ textAlign: 'center' }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.95', maxWidth: '600px', margin: '0 auto' }}>
            Common questions about {profileData.name}
          </p>
        </header>

        <section>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {profileData.faqs.map((faq, idx) => {
              const gradients = [
                'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              ]
              const gradient = gradients[idx % gradients.length]
              return (
                <div 
                  key={idx} 
                  className="faq-item"
                  style={{
                    borderLeft: '5px solid',
                    borderImage: `${gradient} 1`
                  }}
                >
                  <div className="faq-question">{faq.question}</div>
                  <div className="faq-answer">{faq.answer}</div>
                </div>
              )
            })}
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


