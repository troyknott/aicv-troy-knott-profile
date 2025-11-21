import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <p>
        <Link href="/">Return to Home</Link>
      </p>
    </main>
  )
}


