import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-5">
      <Link
        href="/dashboard"
      >
        <Button>Go to dashboard</Button>
      </Link> 
    </main>
  );
}
