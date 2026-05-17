import DockItem from "./DockItem"

export default function Dock() {
  return (
    <div
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2 rounded-xl"
      style={{
        background: "var(--dock)",
        border: "0.5px solid var(--border)",
        backdropFilter: "blur(12px)",
      }}
    >
      <DockItem label="Deuka" icon="🌦" />
      <DockItem label="Ledger" icon="📒" />
      <DockItem label="CV.doc">
        <div
          className="w-8 h-8 flex flex-col items-center justify-center rounded-sm"
          style={{ background: "#1e3a5f", border: "1px solid rgba(59,125,216,0.6)" }}
        >
          <span className="text-xs font-bold" style={{ color: "#3b7dd8" }}>W</span>
        </div>
      </DockItem>
      <DockItem label="about.txt">
        <div
          className="w-8 h-8 flex items-center justify-center rounded-sm"
          style={{ background: "#222", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>TXT</span>
        </div>
      </DockItem>
      <DockItem label="Contact" icon="✉️" />
      <DockItem label="Skills.json">
        <div
          className="w-8 h-8 flex items-center justify-center rounded-sm"
          style={{ background: "#0d2e30", border: "1px solid rgba(45,212,200,0.4)" }}
        >
          <span className="text-[10px] font-mono" style={{ color: "#2dd4c8" }}>{"{ }"}</span>
        </div>
      </DockItem>
      <DockItem label="build-log.md">
        <div
          className="w-8 h-8 flex items-center justify-center rounded-sm"
          style={{ background: "#1e0d30", border: "1px solid rgba(155,92,246,0.4)" }}
        >
          <span className="text-[10px] font-mono" style={{ color: "#9b5cf6" }}>MD</span>
        </div>
      </DockItem>
      <div className="w-px h-6 mx-1" style={{ background: "rgba(255,255,255,0.1)" }} />
      <DockItem label="Recycle Bin" icon="🗑️" />
    </div>
  )
}