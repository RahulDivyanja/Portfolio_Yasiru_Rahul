import { clsx } from "clsx"

export const ActivityDot: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx("relative h-2 w-2 bg-white", className)}>
      <div className="absolute inset-0 animate-ping rounded-full bg-green-500" />
      <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-green-500" />
    </div>
  )
}
