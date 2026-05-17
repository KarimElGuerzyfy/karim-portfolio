type IconProps = {
  label: string
  onClick?: () => void
  children: React.ReactNode
}

export default function Icon({ label, onClick, children }: IconProps) {
  return (
    <div
      className="flex flex-col items-center gap-1 w-16 cursor-default select-none group"
      onClick={onClick}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-sm transition-opacity group-hover:opacity-80">
        {children}
      </div>
      <span
        className="text-xs text-center leading-tight px-1"
        style={{ color: "var(--text)" }}
      >
        {label}
      </span>
    </div>
  )
}