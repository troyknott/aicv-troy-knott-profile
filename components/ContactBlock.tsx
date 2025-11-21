interface ContactBlockProps {
  phone?: string
  email?: string
  address?: {
    street?: string
    city: string
    state: string
    zip?: string
  }
  mapUrl?: string
}

export default function ContactBlock({
  phone,
  email,
  address,
  mapUrl,
}: ContactBlockProps) {
  const fullAddress = address
    ? `${address.street ? `${address.street}, ` : ''}${address.city}, ${address.state}${address.zip ? ` ${address.zip}` : ''}`
    : null

  return (
    <address className="not-italic" style={{ fontStyle: 'normal' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {fullAddress && address && (
          <div>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', marginBottom: '0.5rem' }}>
              {address.street && <><strong>{address.street}</strong><br /></>}
              {address.city}, {address.state}{address.zip && ` ${address.zip}`}
            </p>
          </div>
        )}
        {phone && (
          <div>
            <a 
              href={`tel:${phone.replace(/\s/g, '')}`} 
              className="btn"
              style={{ display: 'inline-block' }}
            >
              📞 {phone}
            </a>
          </div>
        )}
        {email && (
          <div>
            <a 
              href={`mailto:${email}`} 
              className="btn btn-secondary"
              style={{ display: 'inline-block' }}
            >
              ✉️ {email}
            </a>
          </div>
        )}
        {mapUrl && (
          <div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ display: 'inline-block' }}
            >
              🗺️ View on Google Maps
            </a>
          </div>
        )}
      </div>
    </address>
  )
}


