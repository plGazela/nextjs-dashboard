"use client"

import { ColumnDef } from "@tanstack/react-table";

import { 
  Post, 
  Comment,
} from "@/lib/types";

export const latestPostsColumns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "body",
    header: "Body",
    cell: ({ row }) => {
      const body = String(row.getValue("body"));
      const formatted = body.substring(0, 100) + "...";
      return formatted;
    }
  },
]

export const latestCommentsColumns: ColumnDef<Comment>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "E-Mail",
  },
  {
    accessorKey: "body",
    header: "Body",
    cell: ({ row }) => {
      const body = String(row.getValue("body"));
      const formatted = body.substring(0, 100) + "...";
      return formatted;
    }
  },
]