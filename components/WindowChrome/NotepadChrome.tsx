interface NotepadChromeProps {
  children: React.ReactNode
  theme?: 'plain' | 'vscode' | 'markdown'
}

const themes = {
  plain: {
    toolbar: { background: '#d4d0c8', borderBottom: '2px solid #808080' },
    content: { background: '#ffffff', color: '#000000', fontFamily: '"Courier New", monospace' },
    menuItems: ['File', 'Edit', 'Format', 'View', 'Help'],
    menuStyle: { background: '#d4d0c8', color: '#000' },
  },
  vscode: {
    toolbar: { background: '#1e1e1e', borderBottom: '1px solid #333' },
    content: { background: '#1e1e1e', color: '#d4d4d4', fontFamily: '"Courier New", monospace' },
    menuItems: ['File', 'Edit', 'Selection', 'View', 'Terminal'],
    menuStyle: { background: '#1e1e1e', color: '#ccc' },
  },
  markdown: {
    toolbar: { background: '#1a0d2e', borderBottom: '1px solid rgba(155,92,246,0.3)' },
    content: { background: '#120820', color: '#e2d9f3', fontFamily: 'Georgia, serif' },
    menuItems: ['File', 'Edit', 'View', 'Help'],
    menuStyle: { background: '#1a0d2e', color: '#c4a9f0' },
  },
}

export default function NotepadChrome({ children, theme = 'plain' }: NotepadChromeProps) {
  const t = themes[theme]

  return (
    <div className="flex flex-col h-full">
      <div
        className="shrink-0 flex items-center gap-1 px-2 h-7 select-none"
        style={t.toolbar}
      >
        {t.menuItems.map((item) => (
          <span
            key={item}
            className="px-2 py-0.5 text-xs cursor-default"
            style={t.menuStyle}
            onMouseEnter={e => (e.currentTarget.style.background = theme === 'plain' ? '#000080' : 'rgba(255,255,255,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = t.menuStyle.background)}
          >
            {item}
          </span>
        ))}
      </div>

      <div
        className="flex-1 overflow-y-auto p-4 text-sm leading-relaxed"
        style={t.content}
      >
        {children}
      </div>
    </div>
  )
}