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
        <header>
          <nav style={{ marginBottom: '2rem' }}>
            <Link href="/">← Back to Home</Link>
          </nav>
          <h1>{profileData.name}</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            {profileData.title} of{' '}
            <a
              href={profileData.organization.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profileData.organization.name}
            </a>
          </p>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            {profileData.location.city}, {profileData.location.state} •{' '}
            {profileData.location.region}
          </p>
        </header>

        <section>
          <h2>About</h2>
          <div style={{ maxWidth: '800px' }}>
            <p>{profileData.bio}</p>
          </div>
        </section>

        <section>
          <h2>Contact</h2>
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
        </section>

        <section>
          <h2>Connect</h2>
          <ul>
            {profileData.social.linkedin && (
              <li>
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            )}
            {profileData.social.facebook && (
              <li>
                <a
                  href={profileData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            )}
            {profileData.social.instagram && (
              <li>
                <a
                  href={profileData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            )}
            {profileData.social.youtube && (
              <li>
                <a
                  href={profileData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            )}
          </ul>
        </section>

        <section>
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
          <p>{profileData.organization.description}</p>
          <p>
            <a
              href={profileData.organization.aboutUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about {profileData.organization.name}
            </a>
          </p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            {profileData.faqs.map((faq, idx) => (
              <li key={idx} style={{ marginBottom: '1.5rem' }}>
                <strong>{faq.question}</strong>
                <p style={{ marginTop: '0.5rem' }}>{faq.answer}</p>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: '2rem' }}>
            <Link href="/faq">View all FAQs →</Link>
          </p>
        </section>

        {profileData.localConnections && profileData.localConnections.length > 0 && (
          <section>
            <h2>Local Connections</h2>
            <ul>
              {profileData.localConnections.map((connection, idx) => (
                <li key={idx}>
                  <a
                    href={connection.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {connection.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  )
}

