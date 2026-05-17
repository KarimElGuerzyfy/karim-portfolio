import Clock from "./Clock"

export default function Taskbar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 h-10 flex items-center justify-between px-2"
      style={{
        background: "rgba(55, 55, 60, 0.97)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Left — logo placeholder */}
      <div
        className="flex items-center justify-center w-10 h-8 rounded-sm cursor-default select-none text-lg"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        ⊞
      </div>

      {/* Right — system tray clock */}
      <div
        className="flex items-center px-3 h-8 text-sm text-white/90"
        style={{
          borderLeft: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Clock />
      </div>
    </div>
  )
}