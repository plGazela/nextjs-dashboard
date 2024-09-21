import { DataTableExtended } from "@/components/data-table/DataTableExtended";

import { fetchComments } from "@/lib/data";
import { allCommentsColumns } from "@/lib/columns";

export default async function AllComments() {
  const data = await fetchComments();

  return (
    <DataTableExtended columns={allCommentsColumns} data={data} filter="email" filterPlaceholder="Filter e-mails..." />
  );
}
