import Desktop from '@/components/Desktop/Desktop'
import Dock from '@/components/Dock/Dock'
import WindowManager from '@/components/Window/WindowManager'

export default function Home() {
  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundImage: "url('/wallpaper.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Desktop />
      <WindowManager />
      <Dock />
    </div>
  )
}