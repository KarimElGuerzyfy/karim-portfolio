'use client'

import Icon from './Icon'
import { desktopItems } from '@/data/desktopItems'
import { useWindows } from '@/context/WindowContext'

export default function IconGrid() {
  const { openWindow } = useWindows()

  return (
    <div className="flex flex-col items-center gap-2 pt-4 px-2">
      {desktopItems.map((item) => (
        <Icon
          key={item.id}
          label={item.label}
          onDoubleClick={() => openWindow(item.id)}
        >
          {item.icon}
        </Icon>
      ))}
    </div>
  )
}