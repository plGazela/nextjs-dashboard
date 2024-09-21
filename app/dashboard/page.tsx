import { Suspense } from "react";

import Header from "@/components/Header";
import StatsWrapper from "@/components/StatsWrapper";
import LatestPosts from "@/components/LatestPosts";
import StatsWrapperSkeleton from "@/components/skeletons/StatsWrapperSkeleton";
import DataTableSkeleton from "@/components/skeletons/DataTableSkeleton";
import LatestComments from "@/components/LatestComments";

export default function Page() {
  return (
    <>
      <Header title="Dashboard" />
      <Suspense fallback={<StatsWrapperSkeleton />}>
        <StatsWrapper />
      </Suspense>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Suspense fallback={<DataTableSkeleton />}>
          <LatestPosts />
        </Suspense>
        <Suspense fallback={<DataTableSkeleton />}>
          <LatestComments />
        </Suspense>
      </section>
    </>
  );
}
