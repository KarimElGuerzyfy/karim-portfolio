type DockItemProps = {
  label: string
  icon?: string
  children?: React.ReactNode
  onClick?: () => void
  isActive?: boolean
}

export default function DockItem({ label, icon, children, onClick, isActive }: DockItemProps) {
  return (
    <div
      className="flex flex-col items-center gap-1 group cursor-default"
      onClick={onClick}
    >
      <div className="w-8 h-8 flex items-center justify-center text-xl transition-transform group-hover:-translate-y-1">
        {children ?? <span>{icon}</span>}
      </div>
      {isActive && (
        <div className="w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
      )}
      <span
        className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 px-2 py-0.5 rounded-sm"
        style={{
          background: "rgba(0,0,0,0.7)",
          color: "var(--text)",
        }}
      >
        {label}
      </span>
    </div>
  )
}