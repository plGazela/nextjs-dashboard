import Link from "next/link";

import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";

import { latestCommentsColumns } from "@/lib/columns";
import { fetchLatestComments } from "@/lib/data";

export default async function LatestComments() {
  const data = await fetchLatestComments();

  return (
    <div className="mb-5">
      <h2 className="mb-3 text-2xl font-semibold">Latest comments</h2>
      <DataTable columns={latestCommentsColumns} data={data} />
      <div className="mt-3 flex justify-between items-center">
        <p className="text-sm text-muted-foreground text-right">Showing 5 latest results</p>
        <Link href="/dashboard/comments">
          <Button>Show all comments</Button>
        </Link>
      </div>
    </div>
  );
}
