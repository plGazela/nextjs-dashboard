import { Suspense } from "react";

import Header from "@/components/Header";
import StatsWrapper from "@/components/StatsWrapper";
import LatestPosts from "@/components/LatestPosts";
import StatsWrapperSkeleton from "@/components/skeletons/StatsWrapperSkeleton";
import LatestPostsSkeleton from "@/components/skeletons/LatestPostsSkeleton";

export default function Page() {
  return (
    <>
      <Header title="Dashboard" />
      <Suspense fallback={<StatsWrapperSkeleton />}>
        <StatsWrapper />
      </Suspense>
      <Suspense fallback={<LatestPostsSkeleton />}>
        <LatestPosts />
      </Suspense>
    </>
  );
}
