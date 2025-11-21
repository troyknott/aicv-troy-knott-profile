import Link from 'next/link'
import profileData from '@/data/profile.json'

export const metadata = {
  title: 'Troy Knott - Digital Marketing Expert | Coachella Valley',
  description: 'Personal profile of Troy Knott, Founder and CEO of Spring Digital, Inc. Digital marketing expert serving the Coachella Valley.',
}

export default function Home() {
  return (
    <main className="container">
      <header className="hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', textAlign: 'left', padding: '3rem 2rem' }}>
        <div>
          <h1 style={{ textAlign: 'left' }}>Troy Knott</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '500' }}>
            Founder & CEO of Spring Digital, Inc.
          </p>
          <p style={{ fontSize: '1.125rem', opacity: '0.9', marginBottom: '1.5rem' }}>
            Digital Marketing Expert | Coachella Valley
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
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)', 
            borderRadius: 'var(--border-radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid rgba(255,255,255,0.4)',
            color: 'rgba(255,255,255,0.95)',
            fontSize: '1rem',
            fontWeight: '600',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)' }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              📷 Professional Headshot<br />
              <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>Placeholder</span>
            </div>
          </div>
        </div>
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
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <Link 
            href={`/profile/${profileData.slug}`} 
            className="card" 
            style={{ 
              textAlign: 'center',
              background: 'linear-gradient(135deg, #ffffff 0%, #fef3e2 100%)',
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👤</div>
            <h3>Full Profile</h3>
            <p style={{ marginBottom: '1.5rem' }}>View complete professional profile, credentials, and expertise</p>
            <span className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>View Profile →</span>
          </Link>
          <Link 
            href="/faq" 
            className="card" 
            style={{ 
              textAlign: 'center',
              background: 'linear-gradient(135deg, #ffffff 0%, #fef3e2 100%)',
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #10b981 0%, #059669 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❓</div>
            <h3>FAQs</h3>
            <p style={{ marginBottom: '1.5rem' }}>Common questions about services and approach</p>
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


