import React from 'react'

type Props = {
  email: string
  phone?: string
  location?: string
}

export function Contact({ email, phone, location }: Props) {
  return (
    <div className="card text-sm">
      <p><strong>Email:</strong> <a className="underline" href={`mailto:${email}`}>{email}</a></p>
      {phone && <p className="mt-1"><strong>Phone:</strong> {phone}</p>}
      {location && <p className="mt-1"><strong>Location:</strong> {location}</p>}
      <p className="mt-3 opacity-70">This contact section uses mailto:. You can replace it later with a form service.</p>
    </div>
  )
}
