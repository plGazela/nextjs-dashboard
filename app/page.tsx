import { Button } from "@/components/ui/button";
import Link from "next/link";

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
