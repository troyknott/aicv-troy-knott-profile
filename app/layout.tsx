import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Troy Knott - Founder & CEO of Spring Digital, Inc. | Coachella Valley',
  description: 'Troy Knott is the Founder and CEO of Spring Digital, Inc., a full-service digital marketing agency in the Coachella Valley. Expert in SEO, digital advertising, web design, and digital strategy.',
  openGraph: {
    title: 'Troy Knott - Founder & CEO of Spring Digital, Inc.',
    description: 'Digital marketing expert and CEO of Spring Digital, Inc. helping businesses grow through smart strategy and measurable results.',
    type: 'profile',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


