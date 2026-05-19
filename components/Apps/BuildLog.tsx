import NotepadChrome from '@/components/WindowChrome/NotepadChrome'

const entries = [
  {
    date: 'Day 01',
    title: 'The idea',
    body: `Started thinking about what makes a portfolio memorable.
Everyone has the same scrolling hero + projects grid.
Decided to build a Windows XP desktop instead.
Might be a terrible idea. Doing it anyway.`,
  },
  {
    date: 'Day 03',
    title: 'Stack chosen',
    body: `Next.js 16, React 19, TypeScript, Tailwind v4.
Tailwind v4 has no config file — everything lives in globals.css.
Took a while to wrap my head around @theme inline.
Got the wallpaper wired up. Kakashi on gray. Looks right.`,
  },
  {
    date: 'Day 06',
    title: 'Shell complete',
    body: `Taskbar, dock, desktop icons all built.
The floating pill dock above the taskbar was tricky to position.
Live clock in the system tray works.
Nothing is clickable yet. It just looks like a desktop.`,
  },
  {
    date: 'Day 09',
    title: 'Window system',
    body: `Built WindowContext with useReducer.
Open, close, minimize, focus, move — all working.
react-draggable + re-resizable for the window chrome.
Framer Motion for open/close animations.
Clicking an icon finally opens something.`,
  },
  {
    date: 'ongoing',
    title: 'You are here',
    body: `Still building. More windows to fill.
Full name hidden somewhere in this file.
— Karim El Guerzyfy`,
  },
]

export default function BuildLog() {
  return (
    <NotepadChrome theme="markdown">
      <div className="space-y-8 text-sm">
        <div>
          <h1 style={{ color: '#c4a9f0', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>build-log.md</h1>
          <p style={{ color: '#9b5cf6', fontSize: 12 }}>A dev journal. The story of this site.</p>
        </div>
        {entries.map((e) => (
          <div key={e.date}>
            <div className="flex items-baseline gap-3 mb-2">
              <span style={{ color: '#9b5cf6', fontSize: 11, fontFamily: 'monospace' }}>{e.date}</span>
              <span style={{ color: '#c4a9f0', fontWeight: 700 }}>{e.title}</span>
            </div>
            <p style={{ color: '#e2d9f3', lineHeight: 1.7, whiteSpace: 'pre-line', paddingLeft: 12, borderLeft: '2px solid rgba(155,92,246,0.3)' }}>
              {e.body}
            </p>
          </div>
        ))}
      </div>
    </NotepadChrome>
  )
}