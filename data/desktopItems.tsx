export type WindowId = 'deuka' | 'ledger' | 'cv' | 'about' | 'skills' | 'buildlog' | 'contact'
export type WindowVariant = 'browser' | 'notepad' | 'pdf' | 'email'

export interface DesktopItem {
  id: WindowId
  label: string
  variant: WindowVariant
  icon: React.ReactNode
  dockIcon: React.ReactNode
}

const folderIcon = (emoji: string) => (
  <div
    className="w-12 h-12 flex items-center justify-center rounded-sm text-2xl"
    style={{ background: 'rgba(212, 98, 42, 0.15)', border: '1px solid rgba(212, 98, 42, 0.5)' }}
  >
    {emoji}
  </div>
)

const folderDockIcon = (emoji: string) => (
  <div className="w-8 h-8 flex items-center justify-center text-xl">
    {emoji}
  </div>
)

export const desktopItems: DesktopItem[] = [
  {
    id: 'deuka',
    label: 'Deuka',
    variant: 'browser',
    icon: folderIcon('🌦'),
    dockIcon: folderDockIcon('🌦'),
  },
  {
    id: 'ledger',
    label: 'Ledger',
    variant: 'browser',
    icon: folderIcon('📒'),
    dockIcon: folderDockIcon('📒'),
  },
  {
    id: 'cv',
    label: 'CV.doc',
    variant: 'pdf',
    icon: (
      <div
        className="w-12 h-12 flex flex-col items-center justify-center rounded-sm"
        style={{ background: '#1e3a5f', border: '1px solid rgba(59, 125, 216, 0.6)' }}
      >
        <span className="text-sm font-bold" style={{ color: '#3b7dd8' }}>W</span>
        <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>.doc</span>
      </div>
    ),
    dockIcon: (
      <div
        className="w-8 h-8 flex flex-col items-center justify-center rounded-sm"
        style={{ background: '#1e3a5f', border: '1px solid rgba(59,125,216,0.6)' }}
      >
        <span className="text-xs font-bold" style={{ color: '#3b7dd8' }}>W</span>
      </div>
    ),
  },
  {
    id: 'about',
    label: 'about.txt',
    variant: 'notepad',
    icon: (
      <div
        className="w-12 h-12 flex items-center justify-center rounded-sm"
        style={{ background: '#222', border: '1px solid rgba(255,255,255,0.15)' }}
      >
        <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>TXT</span>
      </div>
    ),
    dockIcon: (
      <div
        className="w-8 h-8 flex items-center justify-center rounded-sm"
        style={{ background: '#222', border: '1px solid rgba(255,255,255,0.15)' }}
      >
        <span className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>TXT</span>
      </div>
    ),
  },
  {
    id: 'skills',
    label: 'Skills.json',
    variant: 'notepad',
    icon: (
      <div
        className="w-12 h-12 flex items-center justify-center rounded-sm"
        style={{ background: '#0d2e30', border: '1px solid rgba(45, 212, 200, 0.4)' }}
      >
        <span className="text-xs font-mono" style={{ color: '#2dd4c8' }}>{'{ }'}</span>
      </div>
    ),
    dockIcon: (
      <div
        className="w-8 h-8 flex items-center justify-center rounded-sm"
        style={{ background: '#0d2e30', border: '1px solid rgba(45,212,200,0.4)' }}
      >
        <span className="text-[10px] font-mono" style={{ color: '#2dd4c8' }}>{'{ }'}</span>
      </div>
    ),
  },
  {
    id: 'buildlog',
    label: 'build-log.md',
    variant: 'notepad',
    icon: (
      <div
        className="w-12 h-12 flex items-center justify-center rounded-sm"
        style={{ background: '#1e0d30', border: '1px solid rgba(155, 92, 246, 0.4)' }}
      >
        <span className="text-xs font-mono" style={{ color: '#9b5cf6' }}>MD</span>
      </div>
    ),
    dockIcon: (
      <div
        className="w-8 h-8 flex items-center justify-center rounded-sm"
        style={{ background: '#1e0d30', border: '1px solid rgba(155,92,246,0.4)' }}
      >
        <span className="text-[10px] font-mono" style={{ color: '#9b5cf6' }}>MD</span>
      </div>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    variant: 'email',
    icon: (
      <div
        className="w-12 h-12 flex items-center justify-center rounded-sm text-xl"
        style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.15)' }}
      >
        ✉️
      </div>
    ),
    dockIcon: (
      <div className="w-8 h-8 flex items-center justify-center text-xl">
        ✉️
      </div>
    ),
  },
]