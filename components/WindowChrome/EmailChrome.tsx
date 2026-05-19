interface EmailChromeProps {
  children: React.ReactNode
}

export default function EmailChrome({ children }: EmailChromeProps) {
  return (
    <div className="flex flex-col h-full">
      <div
        className="shrink-0 flex items-center gap-1 px-2 py-1 select-none"
        style={{
          background: '#d4d0c8',
          borderBottom: '2px solid #808080',
          boxShadow: 'inset 0 1px 0 #ffffff',
        }}
      >
        {[
          { icon: '📤', label: 'Send' },
          { icon: '✂️', label: 'Cut' },
          { icon: '📋', label: 'Copy' },
          { icon: '📎', label: 'Attach' },
        ].map(({ icon, label }) => (
          <button
            key={label}
            className="flex flex-col items-center gap-0.5 px-2 py-1 cursor-default select-none"
            style={{ background: 'transparent', border: '1px solid transparent', minWidth: 44 }}
            onMouseEnter={e => {
              e.currentTarget.style.border = '1px solid #808080'
              e.currentTarget.style.background = '#e8e4dc'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.border = '1px solid transparent'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <span className="text-base leading-none">{icon}</span>
            <span className="text-[10px]" style={{ color: '#000' }}>{label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col" style={{ background: '#fff' }}>
        {children}
      </div>
    </div>
  )
}