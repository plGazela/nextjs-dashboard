"use client"

import { ColumnDef } from "@tanstack/react-table";

import { Post } from "@/lib/types";

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
]
