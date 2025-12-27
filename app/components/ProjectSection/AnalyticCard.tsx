import { CountUp } from "@/app/ui/CountUp"
import { H3 } from "@/app/ui/Elements"
import { MotionSpan, MotionDiv } from "@/app/utils/lazy-ui"

interface AnalyticCardProps {
  title: string
  description?: string
  percentageIncrease?: number
  value?: number
  prefix?: string
  suffix?: string
  chart: React.ReactNode
  dataSource: string
  index?: number
}

export const AnalyticCard: React.FC<AnalyticCardProps> = ({
  title,
  description,
  percentageIncrease,
  value,
  prefix = "+",
  suffix = "%",
  chart,
  dataSource,
  index = 0
}) => {
  const displayValue = value ?? percentageIncrease;

  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.2, 0.65, 0.3, 0.9]
      }}
      className="relative flex h-auto max-w-md min-w-[300px] flex-1 flex-col justify-between rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/50"
    >
      {/* Title */}

      <div className="mb-8 text-center">
        <H3 className="mb-2 dark:text-slate-100">{title}</H3>
        {displayValue !== undefined && (
          <p className="text-4xl font-semibold text-slate-700 dark:text-slate-300">
            {prefix}<CountUp to={displayValue} margin="-100px" />{suffix}
          </p>
        )}
        {description && <p className="text-xs leading-tight text-gray-600 dark:text-slate-400">{description}</p>}
      </div>

      {/* Chart area: render provided chart/node if present, otherwise show a decorative animated blob */}
      <div className="mt-6 flex items-center justify-center">
        {chart ? (
          <div className="w-full">{chart}</div>
        ) : (
          <div className="animated-blob h-20 w-20 rounded-full" aria-hidden />
        )}
      </div>
      <MotionSpan
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 1.5,
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
        className="absolute -bottom-6 left-4 text-center text-xs text-slate-500 dark:text-slate-400"
      >
        * {dataSource}
      </MotionSpan>
    </MotionDiv>
  )
}
