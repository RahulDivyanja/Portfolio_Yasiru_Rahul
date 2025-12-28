import Image, { StaticImageData } from "next/image"

export const ClientInfoCard: React.FC<{
  img?: StaticImageData | string | null
  name: string
  title: string
}> = ({ img, name, title }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      {/* Avatar */}
      <div className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-slate-500">
        {img ? (
          <Image
            src={img as StaticImageData | string}
            alt={name}
            width={76}
            height={76}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-200 text-xs font-medium text-slate-700 dark:bg-white/5 dark:text-slate-300">
            {(() => {
              const safeName = name ?? "";
              const initials = safeName
                .split(" ")
                .map((n) => (n && n[0]) || "")
                .filter(Boolean)
                .slice(0, 2)
                .join("")
                .toUpperCase();

              return initials || (safeName ? safeName[0].toUpperCase() : "?");
            })()}
          </div>
        )}
      </div>

      {/* Name & Role */}
      <div className="flex flex-col items-start">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-slate-500">{title}</p>
      </div>
    </div>
  )
}
