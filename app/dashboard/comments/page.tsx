import { Suspense } from "react";

import Header from "@/components/Header";
import AllComments from "@/components/AllComments";
import DataTableSkeleton from "@/components/skeletons/DataTableSkeleton";

export default function Page() {
  return (
    <>
      <Header title="Comments" />
      <Suspense fallback={<DataTableSkeleton />}>
        <AllComments />
      </Suspense>    
    </>
  );
}
