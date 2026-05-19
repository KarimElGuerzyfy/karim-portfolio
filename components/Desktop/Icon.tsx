interface IconProps {
  label: string
  children: React.ReactNode
  onDoubleClick?: () => void
}

export default function Icon({ label, children, onDoubleClick }: IconProps) {
  return (
    <div
      className="flex flex-col items-center gap-1 cursor-default group w-16"
      onDoubleClick={onDoubleClick}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-sm transition-all group-hover:brightness-125 group-active:scale-95">
        {children}
      </div>
      <span
        className="text-[10px] text-center leading-tight px-1"
        style={{ color: 'var(--text)', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
      >
        {label}
      </span>
    </div>
  )
}