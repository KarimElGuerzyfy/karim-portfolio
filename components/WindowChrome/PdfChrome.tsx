interface PdfChromeProps {
  children: React.ReactNode
  filename?: string
}

export default function PdfChrome({ children, filename = 'document.pdf' }: PdfChromeProps) {
  return (
    <div className="flex flex-col h-full">
      <div
        className="shrink-0 flex items-center justify-between px-3 h-9 gap-3 select-none"
        style={{ background: '#3d3d3d', borderBottom: '1px solid #222' }}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs" style={{ color: '#ff4444', fontWeight: 700, fontFamily: 'serif' }}>PDF</span>
          <span className="text-xs truncate max-w-[160px]" style={{ color: '#ccc' }}>{filename}</span>
          <span className="text-xs" style={{ color: '#888' }}>Page 1 of 1</span>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1 px-2 h-6 text-xs rounded"
            style={{ background: '#555', color: '#eee', border: '1px solid #666' }}
          >
            <span>100%</span>
            <span style={{ color: '#aaa' }}>▾</span>
          </div>
          <button
            className="flex items-center gap-1 px-3 h-6 text-xs rounded"
            style={{ background: '#0078d4', color: '#fff', border: 'none', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#106ebe')}
            onMouseLeave={e => (e.currentTarget.style.background = '#0078d4')}
          >
            ↓ Download
          </button>
        </div>
      </div>

      <div
        className="flex-1 overflow-y-auto flex justify-center py-6 px-4"
        style={{ background: '#525659' }}
      >
        <div
          className="w-full max-w-[420px] min-h-[560px] p-10"
          style={{ background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.5)', color: '#000' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}