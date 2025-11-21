import Link from 'next/link'
import profileData from '@/data/profile.json'

export const metadata = {
  title: 'Troy Knott - Digital Marketing Expert | Coachella Valley',
  description: 'Personal profile of Troy Knott, Founder and CEO of Spring Digital, Inc. Digital marketing expert serving the Coachella Valley.',
}

export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Troy Knott</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '500' }}>
          Founder & CEO of Spring Digital, Inc.
        </p>
        <p style={{ fontSize: '1.125rem', opacity: '0.9' }}>
          Digital Marketing Expert | Coachella Valley
        </p>
      </header>

      <section className="section-content">
        <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
          Welcome to the personal profile of Troy Knott, Founder and CEO of Spring Digital, Inc., 
          a full-service digital marketing agency based in the Coachella Valley.
        </p>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
          With over a decade of experience in web design, digital marketing, SEO, and business development, 
          Troy helps businesses of all sizes build their online presence and accelerate growth through 
          smart strategy and measurable results.
        </p>
      </section>

      <section>
        <h2>Explore</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <Link href={`/profile/${profileData.slug}`} className="card" style={{ textAlign: 'center' }}>
            <h3>Full Profile</h3>
            <p>View complete professional profile, credentials, and expertise</p>
            <span className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>View Profile →</span>
          </Link>
          <Link href="/faq" className="card" style={{ textAlign: 'center' }}>
            <h3>FAQs</h3>
            <p>Common questions about services and approach</p>
            <span className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>View FAQs →</span>
          </Link>
        </div>
      </section>

      <section className="card">
        <h2>Quick Links</h2>
        <div className="social-links">
          <a href={profileData.organization.url} target="_blank" rel="noopener noreferrer" className="social-link">
            Spring Digital, Inc. Website
          </a>
          <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn Profile
          </a>
        </div>
      </section>
    </main>
  )
}


