import PdfChrome from '@/components/WindowChrome/PdfChrome'

export default function CV() {
  return (
    <PdfChrome filename="Karim_El_Guerzyfy_CV.pdf">
      <div className="font-sans text-sm space-y-5" style={{ color: '#111' }}>
        <div style={{ borderBottom: '2px solid #111', paddingBottom: 12 }}>
          <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 2 }}>Karim El Guerzyfy</h1>
          <p style={{ color: '#555', fontSize: 12 }}>Frontend Developer — Germany</p>
          <p style={{ color: '#555', fontSize: 12 }}>github.com/KarimElGuerzyfy · placeholder@email.com</p>
        </div>
        <div>
          <h2 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Summary</h2>
          <p style={{ fontSize: 12, lineHeight: 1.6, color: '#333' }}>
            Self-taught frontend developer focused on React and modern UI development.
            Completed Meta Frontend Developer Professional Certificate. Building projects
            and expanding skills in API integration and responsive design.
          </p>
        </div>
        <div>
          <h2 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Skills</h2>
          <div style={{ fontSize: 12, color: '#333', lineHeight: 1.8 }}>
            <div><strong>Core:</strong> React, Next.js, TypeScript, JavaScript</div>
            <div><strong>Styling:</strong> Tailwind CSS, CSS3, Framer Motion</div>
            <div><strong>Tools:</strong> Git, Vite, Figma, Vercel, VS Code</div>
            <div><strong>Languages:</strong> Arabic (native), German (fluent), English (fluent)</div>
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Projects</h2>
          <div className="space-y-3">
            <div>
              <div style={{ fontWeight: 600, fontSize: 13 }}>Deuka — Weather App</div>
              <div style={{ fontSize: 11, color: '#666', marginBottom: 2 }}>React · Vite · Tailwind · OpenWeatherMap API</div>
              <div style={{ fontSize: 12, color: '#333', lineHeight: 1.5 }}>Full-featured weather app with 5-day forecast, geolocation, °C/°F toggle, dynamic day/night backgrounds, and frosted glass UI.</div>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13 }}>Ledger — Expense Tracker</div>
              <div style={{ fontSize: 11, color: '#666', marginBottom: 2 }}>Vanilla JS · HTML · Tailwind v4</div>
              <div style={{ fontSize: 12, color: '#333', lineHeight: 1.5 }}>Expense tracker with DOM manipulation, multi-select filter pills, event delegation, and dark mode.</div>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Education</h2>
          <div style={{ fontSize: 12, color: '#333', lineHeight: 1.6 }}>
            <div style={{ fontWeight: 600 }}>Meta Frontend Developer Professional Certificate</div>
            <div style={{ color: '#666' }}>Coursera · 2024</div>
          </div>
        </div>
      </div>
    </PdfChrome>
  )
}