import { Skeleton } from "@/components/ui/skeleton";

export default function StatsWrapperSkeleton() {
  return (
    <section className="mb-5 grid md:grid-cols-3 gap-5">
      <Skeleton className="h-[110px] rounded-xl" />
      <Skeleton className="h-[110px] rounded-xl" />
      <Skeleton className="h-[110px] rounded-xl" />
    </section>
  )
}
