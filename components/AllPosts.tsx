import { DataTableExtended } from "@/components/data-table/DataTableExtended";

import { fetchPosts } from "@/lib/data";
import { allPostsColumns } from "@/lib/columns";

export default async function AllPosts() {
  const data = await fetchPosts();

  return (
    <DataTableExtended columns={allPostsColumns} data={data} filter="title" filterPlaceholder="Filter posts..." />
  );
}