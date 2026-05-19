'use client'

interface BrowserChromeProps {
  url?: string
  children: React.ReactNode
}

export default function BrowserChrome({ url = 'about:blank', children }: BrowserChromeProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Browser toolbar */}
      <div
        className="shrink-0 flex items-center gap-2 px-3 py-2"
        style={{
          background: '#c0c0c0',
          borderBottom: '2px solid #808080',
          boxShadow: 'inset 0 1px 0 #ffffff',
        }}
      >
        {['◀', '▶', '↻'].map((btn, i) => (
          <button
            key={i}
            className="w-7 h-7 flex items-center justify-center text-xs font-bold select-none"
            style={{
              background: '#d4d0c8',
              border: '2px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
              color: '#000',
              cursor: 'default',
            }}
          >
            {btn}
          </button>
        ))}

        <div className="flex items-center gap-1 flex-1">
          <span className="text-xs" style={{ color: '#000', whiteSpace: 'nowrap' }}>Address</span>
          <div
            className="flex-1 flex items-center px-2 h-6 text-xs font-mono"
            style={{
              background: '#fff',
              border: '2px solid',
              borderColor: '#808080 #ffffff #ffffff #808080',
              color: '#000080',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {url}
          </div>
          <button
            className="px-3 h-6 text-xs select-none"
            style={{
              background: '#d4d0c8',
              border: '2px solid',
              borderColor: '#ffffff #808080 #808080 #ffffff',
              color: '#000',
              cursor: 'default',
            }}
          >
            Go
          </button>
        </div>
      </div>

      {/* Page content */}
      <div className="flex-1 overflow-y-auto" style={{ background: '#fff' }}>
        {children}
      </div>

      {/* Status bar */}
      <div
        className="shrink-0 flex items-center px-2 h-5"
        style={{
          background: '#d4d0c8',
          borderTop: '2px solid #808080',
          fontSize: 11,
          color: '#000',
        }}
      >
        <span>Done</span>
      </div>
    </div>
  )
}