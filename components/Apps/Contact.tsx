'use client'

import { useState } from 'react'
import EmailChrome from '@/components/WindowChrome/EmailChrome'

export default function Contact() {
  const [message, setMessage] = useState('')

  return (
    <EmailChrome>
      <div className="flex flex-col h-full text-sm font-sans" style={{ color: '#000' }}>
        {/* Fields */}
        {[
          { label: 'From:', value: 'recruiter@company.com', editable: false },
          { label: 'To:', value: 'karim@placeholder.com', editable: false },
          { label: 'Subject:', value: "Let's talk — Frontend Role", editable: false },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex items-center px-3 h-8 shrink-0"
            style={{ borderBottom: '1px solid #d0d0d0' }}
          >
            <span className="w-16 text-xs shrink-0" style={{ color: '#555' }}>{label}</span>
            <span className="text-xs" style={{ color: '#000080' }}>{value}</span>
          </div>
        ))}

        {/* Message body */}
        <textarea
          className="flex-1 p-3 text-xs resize-none outline-none font-mono"
          style={{ background: '#fff', color: '#000', border: 'none' }}
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Footer */}
        <div
          className="shrink-0 flex items-center justify-between px-3 py-2"
          style={{ background: '#d4d0c8', borderTop: '2px solid #808080' }}
        >
          <span className="text-xs" style={{ color: '#555' }}>
            Or email directly: placeholder@email.com
          </span>
          <button
            className="px-4 py-1 text-xs"
            style={{
              background: '#d4d0c8',
              border: '2px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
              color: '#000',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#c0bdb5')}
            onMouseLeave={e => (e.currentTarget.style.background = '#d4d0c8')}
          >
            📤 Send
          </button>
        </div>
      </div>
    </EmailChrome>
  )
}