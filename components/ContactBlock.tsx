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
    <address className="not-italic">
      <div className="space-y-2">
        {fullAddress && address && (
          <div>
            <p>{address.street && <span>{address.street}<br /></span>}
            {address.city}, {address.state}{address.zip && ` ${address.zip}`}</p>
          </div>
        )}
        {phone && (
          <div>
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:underline">
              {phone}
            </a>
          </div>
        )}
        {email && (
          <div>
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </div>
        )}
        {mapUrl && (
          <div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              View on Google Maps
            </a>
          </div>
        )}
      </div>
    </address>
  )
}


