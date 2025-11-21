import Link from 'next/link'
import profileData from '@/data/profile.json'

export const metadata = {
  title: 'Troy Knott - Digital Marketing Expert | Coachella Valley',
  description: 'Personal profile of Troy Knott, Founder and CEO of Spring Digital, Inc. Digital marketing expert serving the Coachella Valley.',
}

export default function Home() {
  return (
    <main className="container">
      <header>
        <h1>Troy Knott</h1>
        <p className="lead" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Founder & CEO of Spring Digital, Inc. | Digital Marketing Expert
        </p>
      </header>

      <section>
        <p>
          Welcome to the personal profile of Troy Knott, Founder and CEO of Spring Digital, Inc., 
          a full-service digital marketing agency based in the Coachella Valley.
        </p>
        <p>
          With over a decade of experience in web design, digital marketing, SEO, and business development, 
          Troy helps businesses of all sizes build their online presence and accelerate growth through 
          smart strategy and measurable results.
        </p>
      </section>

      <nav style={{ marginTop: '3rem' }}>
        <h2>Explore</h2>
        <ul>
          <li>
            <Link href={`/profile/${profileData.slug}`}>
              View Full Profile
            </Link>
          </li>
          <li>
            <Link href="/faq">
              Frequently Asked Questions
            </Link>
          </li>
        </ul>
      </nav>

      <section style={{ marginTop: '3rem' }}>
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href={profileData.organization.url} target="_blank" rel="noopener noreferrer">
              Spring Digital, Inc. Website
            </a>
          </li>
          <li>
            <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}


