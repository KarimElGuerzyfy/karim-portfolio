import NotepadChrome from '@/components/WindowChrome/NotepadChrome'

export default function Skills() {
  return (
    <NotepadChrome theme="vscode">
      <div className="text-sm font-mono leading-relaxed">
        {[
          { n: 1,  code: '{',                                    color: '#d4d4d4' },
          { n: 2,  code: '  "frontend": {',                     color: '#d4d4d4' },
          { n: 3,  code: '    "core":',                         color: '#d4d4d4' },
          { n: 4,  code: '      ["React", "Next.js",',          color: '#ce9178' },
          { n: 5,  code: '       "TypeScript", "Tailwind"],',   color: '#ce9178' },
          { n: 6,  code: '    "tools":',                        color: '#d4d4d4' },
          { n: 7,  code: '      ["Vite", "Git", "Figma",',      color: '#ce9178' },
          { n: 8,  code: '       "VS Code", "Vercel"],',        color: '#ce9178' },
          { n: 9,  code: '    "styling":',                      color: '#d4d4d4' },
          { n: 10, code: '      ["CSS3", "Tailwind v4",',       color: '#ce9178' },
          { n: 11, code: '       "Framer Motion"]',             color: '#ce9178' },
          { n: 12, code: '  },',                                 color: '#d4d4d4' },
          { n: 13, code: '  "currently_learning": [',           color: '#d4d4d4' },
          { n: 14, code: '    "Node.js", "Testing",',           color: '#ce9178' },
          { n: 15, code: '    "Accessibility"',                  color: '#ce9178' },
          { n: 16, code: '  ],',                                 color: '#d4d4d4' },
          { n: 17, code: '  "languages": {',                    color: '#d4d4d4' },
          { n: 18, code: '    "Arabic":  "native",',            color: '#ce9178' },
          { n: 19, code: '    "German":  "fluent",',            color: '#ce9178' },
          { n: 20, code: '    "English": "fluent"',             color: '#ce9178' },
          { n: 21, code: '  }',                                  color: '#d4d4d4' },
          { n: 22, code: '}',                                    color: '#d4d4d4' },
        ].map(({ n, code, color }) => (
          <div key={n} className="flex">
            <span className="select-none w-8 text-right pr-4 shrink-0" style={{ color: '#858585' }}>{n}</span>
            <span style={{ color }}>{code}</span>
          </div>
        ))}
      </div>
    </NotepadChrome>
  )
}