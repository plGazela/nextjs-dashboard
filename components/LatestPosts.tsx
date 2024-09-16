import { DataTable } from "@/components/ui/data-table";

import { columns } from "@/lib/columns";
import { fetchLatestPosts } from "@/lib/data";

export default async function LatestPosts() {
  const data = await fetchLatestPosts();

  return (
    <div className="mb-5">
      <h2 className="mb-3 text-2xl font-semibold">Latest posts</h2>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
