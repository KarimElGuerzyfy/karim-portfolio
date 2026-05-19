'use client'

import { createContext, useContext, useReducer, useCallback } from 'react'
import type { WindowId } from '@/data/desktopItems'

export interface WindowState {
  id: WindowId
  title: string
  isOpen: boolean
  isMinimized: boolean
  zIndex: number
  position: { x: number; y: number }
}

type WindowAction =
  | { type: 'OPEN_WINDOW'; id: WindowId; position: { x: number; y: number } }
  | { type: 'CLOSE_WINDOW'; id: WindowId }
  | { type: 'MINIMIZE_WINDOW'; id: WindowId }
  | { type: 'FOCUS_WINDOW'; id: WindowId }
  | { type: 'MOVE_WINDOW'; id: WindowId; position: { x: number; y: number } }

interface WindowContextValue {
  windows: WindowState[]
  openWindow: (id: WindowId) => void
  closeWindow: (id: WindowId) => void
  minimizeWindow: (id: WindowId) => void
  focusWindow: (id: WindowId) => void
  moveWindow: (id: WindowId, position: { x: number; y: number }) => void
  getWindow: (id: WindowId) => WindowState | undefined
}

const WINDOW_TITLES: Record<WindowId, string> = {
  deuka:    'Deuka',
  ledger:   'Ledger',
  cv:       'CV.doc',
  about:    'about.txt',
  skills:   'Skills.json',
  buildlog: 'build-log.md',
  contact:  'Contact',
}

const initialWindows: WindowState[] = (Object.keys(WINDOW_TITLES) as WindowId[]).map((id) => ({
  id,
  title: WINDOW_TITLES[id],
  isOpen: false,
  isMinimized: false,
  zIndex: 10,
  position: { x: 0, y: 0 },
}))

let topZ = 20

function reducer(state: WindowState[], action: WindowAction): WindowState[] {
  switch (action.type) {
    case 'OPEN_WINDOW':
      topZ++
      return state.map((w) =>
        w.id === action.id
          ? { ...w, isOpen: true, isMinimized: false, zIndex: topZ, position: action.position }
          : w
      )
    case 'CLOSE_WINDOW':
      return state.map((w) =>
        w.id === action.id ? { ...w, isOpen: false, isMinimized: false } : w
      )
    case 'MINIMIZE_WINDOW':
      return state.map((w) =>
        w.id === action.id ? { ...w, isMinimized: true } : w
      )
    case 'FOCUS_WINDOW':
      topZ++
      return state.map((w) =>
        w.id === action.id ? { ...w, isMinimized: false, zIndex: topZ } : w
      )
    case 'MOVE_WINDOW':
      return state.map((w) =>
        w.id === action.id ? { ...w, position: action.position } : w
      )
    default:
      return state
  }
}

const WindowContext = createContext<WindowContextValue | null>(null)

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windows, dispatch] = useReducer(reducer, initialWindows)

  const openWindow = useCallback((id: WindowId) => {
    const x = Math.max(80, (window.innerWidth / 2) - 300)
    const y = Math.max(40, (window.innerHeight / 2) - 250)
    dispatch({ type: 'OPEN_WINDOW', id, position: { x, y } })
  }, [])

  const closeWindow = useCallback((id: WindowId) =>
    dispatch({ type: 'CLOSE_WINDOW', id }), [])

  const minimizeWindow = useCallback((id: WindowId) =>
    dispatch({ type: 'MINIMIZE_WINDOW', id }), [])

  const focusWindow = useCallback((id: WindowId) =>
    dispatch({ type: 'FOCUS_WINDOW', id }), [])

  const moveWindow = useCallback((id: WindowId, position: { x: number; y: number }) =>
    dispatch({ type: 'MOVE_WINDOW', id, position }), [])

  const getWindow = useCallback((id: WindowId) =>
    windows.find((w) => w.id === id), [windows])

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow, minimizeWindow, focusWindow, moveWindow, getWindow }}>
      {children}
    </WindowContext.Provider>
  )
}

export function useWindows() {
  const ctx = useContext(WindowContext)
  if (!ctx) throw new Error('useWindows must be used inside WindowProvider')
  return ctx
}