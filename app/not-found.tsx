import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container">
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>404</h1>
        <h2 style={{ marginTop: '0', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn">Return to Home</Link>
      </div>
    </main>
  )
}


// Fixed ESLint error
