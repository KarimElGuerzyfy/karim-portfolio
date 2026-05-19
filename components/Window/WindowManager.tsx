'use client'

import { useWindows } from '@/context/WindowContext'
import Window from './Window'
import dynamic from 'next/dynamic'
import type { WindowId, WindowVariant } from '@/data/desktopItems'
import { desktopItems } from '@/data/desktopItems'

const appMap: Record<WindowId, React.ComponentType> = {
  deuka:    dynamic(() => import('@/components/Apps/Deuka')),
  ledger:   dynamic(() => import('@/components/Apps/Ledger')),
  cv:       dynamic(() => import('@/components/Apps/CV')),
  about:    dynamic(() => import('@/components/Apps/About')),
  skills:   dynamic(() => import('@/components/Apps/Skills')),
  buildlog: dynamic(() => import('@/components/Apps/BuildLog')),
  contact:  dynamic(() => import('@/components/Apps/Contact')),
}

const variantMap: Record<WindowId, WindowVariant> = Object.fromEntries(
  desktopItems.map((item) => [item.id, item.variant])
) as Record<WindowId, WindowVariant>

export default function WindowManager() {
  const { windows } = useWindows()

  return (
    <>
      {windows
        .filter((w) => w.isOpen)
        .map((w) => {
          const AppContent = appMap[w.id]
          return (
            <Window
              key={w.id}
              id={w.id}
              title={w.title}
              variant={variantMap[w.id]}
              zIndex={w.zIndex}
              defaultPosition={w.position}
              isMinimized={w.isMinimized}
            >
              <AppContent />
            </Window>
          )
        })}
    </>
  )
}