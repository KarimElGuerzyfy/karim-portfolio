'use client'

import { useRef, useState } from 'react'
import Draggable from 'react-draggable'
import { Resizable } from 're-resizable'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindows } from '@/context/WindowContext'
import type { WindowId, WindowVariant } from '@/data/desktopItems'

interface WindowProps {
  id: WindowId
  title: string
  variant: WindowVariant
  children: React.ReactNode
  zIndex: number
  defaultPosition: { x: number; y: number }
  isMinimized: boolean
}

const VARIANT_SIZES: Record<WindowVariant, { width: number; height: number; minWidth: number; minHeight: number }> = {
  browser: { width: 780, height: 540, minWidth: 480, minHeight: 320 },
  notepad: { width: 560, height: 440, minWidth: 320, minHeight: 240 },
  pdf:     { width: 520, height: 680, minWidth: 360, minHeight: 480 },
  email:   { width: 540, height: 400, minWidth: 380, minHeight: 300 },
}

const ASPECT_LOCKED: Record<WindowVariant, boolean> = {
  browser: false,
  notepad: false,
  pdf:     true,
  email:   false,
}

export default function Window({
  id,
  title,
  variant,
  children,
  zIndex,
  defaultPosition,
  isMinimized,
}: WindowProps) {
  const { closeWindow, minimizeWindow, focusWindow, moveWindow } = useWindows()
  const nodeRef = useRef<HTMLDivElement>(null)
  const sizes = VARIANT_SIZES[variant]
  const [size, setSize] = useState({ width: sizes.width, height: sizes.height })

  return (
    <AnimatePresence>
      {!isMinimized && (
        <motion.div
          key={id}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          style={{ position: 'fixed', zIndex, top: 0, left: 0 }}
          onMouseDown={() => focusWindow(id)}
        >
          <Draggable
            nodeRef={nodeRef as React.RefObject<HTMLElement>}
            defaultPosition={defaultPosition}
            handle=".window-titlebar"
            onStop={(_e, data) => moveWindow(id, { x: data.x, y: data.y })}
          >
            <div ref={nodeRef} style={{ position: 'absolute' }}>
              <Resizable
                size={size}
                minWidth={sizes.minWidth}
                minHeight={sizes.minHeight}
                lockAspectRatio={ASPECT_LOCKED[variant]}
                onResizeStop={(_e, _dir, _ref, d) =>
                  setSize((prev) => ({
                    width: prev.width + d.width,
                    height: prev.height + d.height,
                  }))
                }
                enable={{
                  top: false,
                  right: true,
                  bottom: true,
                  left: true,
                  topRight: false,
                  bottomRight: true,
                  bottomLeft: true,
                  topLeft: false,
                }}
                handleStyles={{
                  right:       { width: 6, right: -3, cursor: 'ew-resize' },
                  left:        { width: 6, left: -3,  cursor: 'ew-resize' },
                  bottom:      { height: 6, bottom: -3, cursor: 'ns-resize' },
                  bottomRight: { width: 12, height: 12, right: -4, bottom: -4, cursor: 'nwse-resize' },
                  bottomLeft:  { width: 12, height: 12, left: -4,  bottom: -4, cursor: 'nesw-resize' },
                }}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                {/* Title bar */}
                <div
                  className="window-titlebar flex items-center justify-between h-8 px-2 select-none cursor-grab active:cursor-grabbing shrink-0"
                  style={{
                    background: 'rgba(35, 20, 10, 0.97)',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    borderLeft: '3px solid var(--accent)',
                  }}
                >
                  <span className="text-xs font-medium tracking-wide" style={{ color: 'var(--text-dim)' }}>
                    {title}
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => { e.stopPropagation(); minimizeWindow(id) }}
                      className="w-5 h-5 flex items-center justify-center rounded-sm text-[11px]"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'var(--text-dim)' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                    >_</button>

                    <button
                      className="w-5 h-5 flex items-center justify-center rounded-sm text-[11px]"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'var(--text-dim)' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                    >□</button>

                    <button
                      onClick={(e) => { e.stopPropagation(); closeWindow(id) }}
                      className="w-5 h-5 flex items-center justify-center rounded-sm text-[11px]"
                      style={{ background: 'rgba(180,40,20,0.5)', border: '1px solid rgba(220,60,40,0.4)', color: 'rgba(255,255,255,0.8)' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(210,50,30,0.9)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'rgba(180,40,20,0.5)')}
                    >×</button>
                  </div>
                </div>

                {/* Content area */}
                <div
                  className="flex-1 overflow-hidden flex flex-col"
                  style={{
                    background: 'rgba(15, 8, 4, 0.96)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderTop: 'none',
                  }}
                >
                  {children}
                </div>
              </Resizable>
            </div>
          </Draggable>
        </motion.div>
      )}
    </AnimatePresence>
  )
}