"use client"

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/data-table/DataTableColumnHeader";

import { MoreHorizontal } from "lucide-react";

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

export const allPostsColumns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
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
  {
    id: "actions",
    cell: ({ row }) => {
      const post = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-4 w-4 p-0 flex items-center">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href={`/posts/${post.id}`}>Show post</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/dashboard/posts/${post.id}`}>Edit post</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete post</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export const allCommentsColumns: ColumnDef<Comment>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="E-Mail" />
    ),
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
  {
    id: "actions",
    cell: ({ row }) => {
      const post = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-4 w-4 p-0 flex items-center">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete comment</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]