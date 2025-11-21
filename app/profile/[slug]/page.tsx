import { notFound } from 'next/navigation'
import Link from 'next/link'
import profileData from '@/data/profile.json'
import JsonLd from '@/components/JsonLd'
import ContactBlock from '@/components/ContactBlock'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  if (slug !== profileData.slug) {
    return {}
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://troyknott.com'
  const profileUrl = `${siteUrl}/profile/${slug}`

  return {
    title: `${profileData.name} - ${profileData.title} of ${profileData.organization.name} | ${profileData.location.region}`,
    description: profileData.description,
    openGraph: {
      title: `${profileData.name} - ${profileData.title}`,
      description: profileData.description,
      url: profileUrl,
      type: 'profile',
      images: [
        {
          url: `${siteUrl}${profileData.image.url}`,
          alt: profileData.image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: `${profileData.name} - ${profileData.title}`,
      description: profileData.description,
    },
  }
}

function generatePersonSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://troyknott.com'
  const profileUrl = `${siteUrl}/profile/${profileData.slug}`

  const sameAs = [
    profileData.social.linkedin,
    profileData.social.facebook,
    profileData.social.instagram,
    profileData.social.youtube,
    profileData.organization.url,
  ].filter(Boolean)

  const address = {
    '@type': 'PostalAddress',
    streetAddress: profileData.location.street,
    addressLocality: profileData.location.city,
    addressRegion: profileData.location.state,
    postalCode: profileData.location.zip,
    addressCountry: 'US',
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profileData.name,
    jobTitle: profileData.title,
    description: profileData.description,
    url: profileUrl,
    image: `${siteUrl}${profileData.image.url}`,
    sameAs,
    email: profileData.contact.email,
    telephone: profileData.contact.phone,
    address,
    worksFor: {
      '@type': 'Organization',
      name: profileData.organization.name,
      url: profileData.organization.url,
      description: profileData.organization.description,
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of California, Berkeley',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: "University of Hawai'i at Manoa",
      },
    ],
    knowsAbout: [
      'Search Engine Optimization',
      'Digital Marketing',
      'Web Design',
      'Digital Advertising',
      'Business Development',
      'Digital Strategy',
      'Brand Building',
    ],
    areaServed: {
      '@type': 'City',
      name: profileData.location.city,
    },
  }
}

export default async function ProfilePage({ params }: PageProps) {
  const { slug } = await params
  if (slug !== profileData.slug) {
    notFound()
  }

  const personSchema = generatePersonSchema()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://troyknott.com'

  return (
    <>
      <JsonLd data={personSchema} />
      <main className="container">
        <nav style={{ marginBottom: '2rem' }}>
          <Link href="/" className="nav-link">← Back to Home</Link>
        </nav>
        
        <header className="hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', textAlign: 'left', padding: '3rem 2rem' }}>
          <div>
            <h1 style={{ textAlign: 'left' }}>{profileData.name}</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '500' }}>
              {profileData.title} of{' '}
              <a
                href={profileData.organization.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'underline' }}
              >
                {profileData.organization.name}
              </a>
            </p>
            <p style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: '1.5rem' }}>
              {profileData.location.city}, {profileData.location.state} • {profileData.location.region}
            </p>
            <div className="social-links" style={{ justifyContent: 'flex-start' }}>
              {profileData.social.linkedin && (
                <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                  LinkedIn
                </a>
              )}
              {profileData.social.youtube && (
                <a href={profileData.social.youtube} target="_blank" rel="noopener noreferrer" className="social-link" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                  YouTube
                </a>
              )}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '100%', 
              aspectRatio: '4/3', 
              backgroundColor: 'rgba(255,255,255,0.1)', 
              borderRadius: 'var(--border-radius)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px dashed rgba(255,255,255,0.3)',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.875rem'
            }}>
              📷 Professional Headshot<br />Placeholder
            </div>
          </div>
        </header>

        {/* Video Section Placeholder */}
        <section className="card">
          <h2>Featured Video</h2>
          <div style={{ 
            width: '100%', 
            aspectRatio: '16/9', 
            backgroundColor: 'var(--color-bg-section)', 
            borderRadius: 'var(--border-radius)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed var(--color-border)',
            color: 'var(--color-text-light)',
            marginBottom: '1rem'
          }}>
            🎥 Video Placeholder<br />Add your featured video here
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', textAlign: 'center' }}>
            Add a professional video introduction, speaking engagement, or marketing insights video
          </p>
        </section>

        {/* Expertise Section */}
        {profileData.expertise && profileData.expertise.length > 0 && (
          <section>
            <h2>Areas of Expertise</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {profileData.expertise.map((skill, idx) => (
                <div key={idx} className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                  <div className="badge" style={{ marginBottom: '0.5rem' }}>{skill}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="section-content">
          <h2>About</h2>
          <div style={{ maxWidth: '900px' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>{profileData.bio}</p>
          </div>
        </section>

        {/* Credentials & Education */}
        {profileData.credentials && (
          <section className="card">
            <h2>Credentials & Education</h2>
            {profileData.credentials.education && profileData.credentials.education.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3>Education</h3>
                {profileData.credentials.education.map((edu, idx) => (
                  <div key={idx} style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid var(--color-accent)' }}>
                    <strong>{edu.degree}</strong> - {edu.institution}<br />
                    <span style={{ color: 'var(--color-text-light)' }}>{edu.field}</span>
                  </div>
                ))}
              </div>
            )}
            {profileData.credentials.achievements && profileData.credentials.achievements.length > 0 && (
              <div>
                <h3>Key Achievements</h3>
                <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                  {profileData.credentials.achievements.map((achievement, idx) => (
                    <li key={idx} style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--color-accent)' }}>✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        <section>
          <h2>Contact</h2>
          <div className="contact-block">
            <ContactBlock
              phone={profileData.contact.phone}
              email={profileData.contact.email}
              address={{
                street: profileData.location.street,
                city: profileData.location.city,
                state: profileData.location.state,
                zip: profileData.location.zip,
              }}
              mapUrl={profileData.location.mapUrl}
            />
          </div>
        </section>

        {/* Speaking Engagements */}
        {profileData.speaking && profileData.speaking.length > 0 && (
          <section className="card">
            <h2>Speaking Engagements</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {profileData.speaking.map((event, idx) => (
                <div key={idx} style={{ padding: '1rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--border-radius)' }}>
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                    {event.title}
                  </div>
                  <div style={{ color: 'var(--color-text-light)', fontSize: '0.9375rem' }}>
                    {event.venue} • {event.type}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Publications */}
        {profileData.publications && profileData.publications.length > 0 && (
          <section className="card">
            <h2>Publications & Writings</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {profileData.publications.map((pub, idx) => (
                <div key={idx} style={{ padding: '1rem', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--border-radius)', borderLeft: '4px solid var(--color-accent)' }}>
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{pub.title}</div>
                  <div style={{ color: 'var(--color-text-light)', fontSize: '0.9375rem' }}>
                    {pub.source} • {pub.type}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '1rem' }}>
              <a href={profileData.organization.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Read More Articles →
              </a>
            </p>
          </section>
        )}

        {/* Media Appearances */}
        {profileData.media && profileData.media.podcasts && profileData.media.podcasts.length > 0 && (
          <section className="card">
            <h2>Media Appearances</h2>
            <h3>Podcast Guest</h3>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              {profileData.media.podcasts.map((podcast, idx) => (
                <li key={idx} style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: 'var(--color-accent)' }}>🎙️</span>
                  {podcast}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Photo Gallery Placeholder */}
        <section className="card">
          <h2>Photo Gallery</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num}
                style={{ 
                  aspectRatio: '1',
                  backgroundColor: 'var(--color-bg-section)', 
                  borderRadius: 'var(--border-radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px dashed var(--color-border)',
                  color: 'var(--color-text-light)',
                  fontSize: '0.875rem',
                  textAlign: 'center',
                  padding: '0.5rem'
                }}
              >
                📸 Photo<br />{num}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', textAlign: 'center', marginTop: '1rem' }}>
            Add professional photos: speaking engagements, events, team photos, or behind-the-scenes
          </p>
        </section>

        {/* Testimonials Placeholder */}
        <section className="card">
          <h2>What People Say</h2>
          <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                style={{ 
                  padding: '1.5rem',
                  backgroundColor: 'var(--color-bg-light)',
                  borderRadius: 'var(--border-radius)',
                  borderLeft: '4px solid var(--color-accent)'
                }}
              >
                <div style={{ 
                  fontSize: '1.125rem', 
                  lineHeight: '1.7', 
                  marginBottom: '1rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text)'
                }}>
                  &ldquo;Add client testimonial or recommendation here. This section showcases social proof and builds credibility.&rdquo;
                </div>
                <div style={{ 
                  fontWeight: '600',
                  color: 'var(--color-primary)'
                }}>
                  — Client Name, Company
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', textAlign: 'center', marginTop: '1rem' }}>
            Add testimonials from clients, partners, or colleagues
          </p>
        </section>

        <section>
          <h2>Connect</h2>
          <div className="social-links">
            {profileData.social.linkedin && (
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
            )}
            {profileData.social.facebook && (
              <a
                href={profileData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Facebook
              </a>
            )}
            {profileData.social.instagram && (
              <a
                href={profileData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
            )}
            {profileData.social.youtube && (
              <a
                href={profileData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                YouTube
              </a>
            )}
          </div>
        </section>

        <section className="card">
          <h2>Organization</h2>
          <h3>
            <a
              href={profileData.organization.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profileData.organization.name}
            </a>
          </h3>
          <p style={{ fontSize: '1.0625rem', lineHeight: '1.8' }}>{profileData.organization.description}</p>
          <p style={{ marginTop: '1rem' }}>
            <a
              href={profileData.organization.aboutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Learn more about {profileData.organization.name} →
            </a>
          </p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {profileData.faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <div className="faq-question">{faq.question}</div>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/faq" className="btn">View all FAQs →</Link>
          </p>
        </section>

        {profileData.localConnections && profileData.localConnections.length > 0 && (
          <section className="card">
            <h2>Local Connections</h2>
            <div className="social-links">
              {profileData.localConnections.map((connection, idx) => (
                <a
                  key={idx}
                  href={connection.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {connection.name}
                </a>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}

