import Icon from "./Icon"

export default function IconGrid() {
  return (
    <div className="flex flex-col items-center gap-2 pt-4 px-2">

      <Icon label="Deuka">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-sm text-2xl"
          style={{
            background: "rgba(212, 98, 42, 0.15)",
            border: "1px solid rgba(212, 98, 42, 0.5)",
          }}
        >
          🌦
        </div>
      </Icon>

      <Icon label="Ledger">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-sm text-2xl"
          style={{
            background: "rgba(212, 98, 42, 0.15)",
            border: "1px solid rgba(212, 98, 42, 0.5)",
          }}
        >
          📒
        </div>
      </Icon>

      <Icon label="CV.doc">
        <div
          className="w-12 h-12 flex flex-col items-center justify-center rounded-sm"
          style={{
            background: "#1e3a5f",
            border: "1px solid rgba(59, 125, 216, 0.6)",
          }}
        >
          <span className="text-sm font-bold" style={{ color: "#3b7dd8" }}>W</span>
          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>.doc</span>
        </div>
      </Icon>

      <Icon label="about.txt">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-sm"
          style={{
            background: "#222",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>TXT</span>
        </div>
      </Icon>

      <Icon label="Skills.json">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-sm"
          style={{
            background: "#0d2e30",
            border: "1px solid rgba(45, 212, 200, 0.4)",
          }}
        >
          <span className="text-xs font-mono" style={{ color: "#2dd4c8" }}>{"{ }"}</span>
        </div>
      </Icon>

      <Icon label="build-log.md">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-sm"
          style={{
            background: "#1e0d30",
            border: "1px solid rgba(155, 92, 246, 0.4)",
          }}
        >
          <span className="text-xs font-mono" style={{ color: "#9b5cf6" }}>MD</span>
        </div>
      </Icon>

      <Icon label="Contact">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-sm text-xl"
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          ✉️
        </div>
      </Icon>

    </div>
  )
}