import BrowserChrome from '@/components/WindowChrome/BrowserChrome'

const URL = 'https://placeholder-ledger.vercel.app'

export default function Ledger() {
  return (
    <BrowserChrome url={URL}>
      <div className="p-6 font-sans" style={{ color: '#111' }}>
        <div className="w-full h-48 flex items-center justify-center rounded mb-6 text-4xl" style={{ background: '#f0faf0' }}>
          📒
        </div>
        <h1 className="text-2xl font-bold mb-1">Ledger</h1>
        <p className="text-sm mb-4" style={{ color: '#555' }}>
          A vanilla JS expense tracker. Add, filter, and analyse transactions with a clean dark UI.
        </p>
        <div className="flex gap-2 flex-wrap mb-6">
          {['Vanilla JS', 'HTML', 'Tailwind CSS v4'].map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs rounded" style={{ background: '#f0faf0', color: '#1a7a1a', border: '1px solid #b3e6b3' }}>{t}</span>
          ))}
        </div>
        <h2 className="font-bold mb-2 text-sm">How to try it</h2>
        <ol className="text-sm space-y-1 mb-6" style={{ color: '#333' }}>
          <li>1. Click the Live link below</li>
          <li>2. Add an expense using the form</li>
          <li>3. Use the filter pills to sort by category</li>
          <li>4. Toggle dark mode in the top right</li>
        </ol>
        <div className="flex gap-3">
          <a href={URL} target="_blank" rel="noreferrer" className="px-4 py-2 text-sm rounded" style={{ background: '#1a7a1a', color: '#fff', textDecoration: 'none' }}>🌐 Live Demo</a>
          <a href="https://github.com/KarimElGuerzyfy" target="_blank" rel="noreferrer" className="px-4 py-2 text-sm rounded" style={{ background: '#24292e', color: '#fff', textDecoration: 'none' }}>GitHub</a>
        </div>
      </div>
    </BrowserChrome>
  )
}