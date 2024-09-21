import { Suspense } from "react";

import Header from "@/components/Header";
import AllPosts from "@/components/AllPosts";
import DataTableSkeleton from "@/components/skeletons/DataTableSkeleton";

export default function Page() {
  return (
    <>
      <Header title="Posts" />
      <Suspense fallback={<DataTableSkeleton />}>
        <AllPosts />
      </Suspense>    
    </>
  );
}
