import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payload = await getPayload({ config: config })
  const categories = await payload.find({
    collection: 'categories',
    limit: 1,
    pagination: false,
  })

  const colors = await payload.find({
    collection: 'colors',
    limit: 1,
    pagination: false,
  })

  return (
    <div
      className="home"
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'start', gap: 32 }}
    >
      <div style={{ display: 'grid', gap: 20 }}>
        <div>
          <h2>With join</h2>
          <h3>Query</h3>
          <pre>
            {`const categories = await payload.find({
  collection: 'categories',
  limit: 1,
  pagination: false,
}})`}
          </pre>
        </div>
        <div>
          <h3>Result</h3>
          <pre>{JSON.stringify(categories, null, 2)}</pre>
        </div>
      </div>
      <div style={{ display: 'grid', gap: 20 }}>
        <div>
          <h2>Without join</h2>
          <h3>Query</h3>
          <pre>
            {`const colors = await payload.find({
  collection: 'colors',
  limit: 1,
  pagination: false,
})`}
          </pre>
        </div>
        <div>
          <h3>Result</h3>
          <pre>{JSON.stringify(colors, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
