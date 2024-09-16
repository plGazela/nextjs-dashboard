import { DataTable } from "@/components/ui/data-table";

import { columns } from "@/lib/columns";
import { Post } from "@/lib/types";

async function getData(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const data = await res.json();

  return data;
}

export default async function RecentPostsTable() {
  const data = await getData();

  return (
    <DataTable columns={columns} data={data} />
  )
}
