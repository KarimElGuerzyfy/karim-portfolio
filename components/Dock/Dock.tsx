'use client'

import DockItem from './DockItem'
import { desktopItems } from '@/data/desktopItems'
import { useWindows } from '@/context/WindowContext'

export default function Dock() {
  const { openWindow } = useWindows()

  return (
    <div
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2 rounded-xl"
      style={{
        background: 'var(--dock)',
        border: '0.5px solid var(--border)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {desktopItems.map((item) => (
        <DockItem
          key={item.id}
          label={item.label}
          onClick={() => openWindow(item.id)}
        >
          {item.dockIcon}
        </DockItem>
      ))}
      <div className="w-px h-6 mx-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
      <DockItem label="Recycle Bin">
        <div className="w-8 h-8 flex items-center justify-center text-xl">🗑️</div>
      </DockItem>
    </div>
  )
}