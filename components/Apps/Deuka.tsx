import BrowserChrome from '@/components/WindowChrome/BrowserChrome'

const URL = 'https://placeholder-deuka.vercel.app'

export default function Deuka() {
  return (
    <BrowserChrome url={URL}>
      <div className="p-6 font-sans" style={{ color: '#111' }}>
        <div className="w-full h-48 flex items-center justify-center rounded mb-6 text-4xl" style={{ background: '#e8f4fd' }}>
          🌦
        </div>
        <h1 className="text-2xl font-bold mb-1">Deuka</h1>
        <p className="text-sm mb-4" style={{ color: '#555' }}>
          A weather app — search any city and get current weather, a 5-day forecast, and hourly breakdown.
        </p>
        <div className="flex gap-2 flex-wrap mb-6">
          {['React', 'Vite', 'Tailwind CSS', 'OpenWeatherMap API'].map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs rounded" style={{ background: '#e8f4fd', color: '#0066cc', border: '1px solid #b3d9f5' }}>{t}</span>
          ))}
        </div>
        <h2 className="font-bold mb-2 text-sm">How to try it</h2>
        <ol className="text-sm space-y-1 mb-6" style={{ color: '#333' }}>
          <li>1. Click the Live link below</li>
          <li>2. Search any city name in the search bar</li>
          <li>3. Toggle °C / °F in the top right</li>
          <li>4. Click a day in the 5-day forecast for hourly breakdown</li>
        </ol>
        <div className="flex gap-3">
          <a href={URL} target="_blank" rel="noreferrer" className="px-4 py-2 text-sm rounded" style={{ background: '#0066cc', color: '#fff', textDecoration: 'none' }}>🌐 Live Demo</a>
          <a href="https://github.com/KarimElGuerzyfy/react-weather-app" target="_blank" rel="noreferrer" className="px-4 py-2 text-sm rounded" style={{ background: '#24292e', color: '#fff', textDecoration: 'none' }}>GitHub</a>
        </div>
      </div>
    </BrowserChrome>
  )
}