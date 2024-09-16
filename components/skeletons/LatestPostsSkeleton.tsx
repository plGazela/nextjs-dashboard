import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonLatestPosts() {
  return (
    <div>
      <Skeleton className="mb-3 w-[200px] h-[40px] rounded-xl" />
      <Skeleton className="h-[250px] rounded-xl" />
    </div>
  )
}
