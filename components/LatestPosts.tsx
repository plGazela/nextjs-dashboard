import Link from "next/link";

import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";

import { latestPostsColumns } from "@/lib/columns";
import { fetchLatestPosts } from "@/lib/data";

export default async function LatestPosts() {
  const data = await fetchLatestPosts();

  return (
    <div className="mb-5">
      <h2 className="mb-3 text-2xl font-semibold">Latest posts</h2>
      <DataTable columns={latestPostsColumns} data={data} />
      <div className="mt-3 flex justify-between items-center">
        <p className="text-sm text-muted-foreground text-right">Showing 5 latest results</p>
        <Link href="/dashboard/posts">
          <Button>Show all posts</Button>
        </Link>
      </div>
    </div>
  );
}
