import IconGrid from "./IconGrid"

export default function Desktop({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-full pb-10">
      <div className="flex flex-col items-center pt-4 px-2 w-20">
        <IconGrid />
      </div>
      <div className="relative flex-1">
        {children}
      </div>
    </div>
  )
}