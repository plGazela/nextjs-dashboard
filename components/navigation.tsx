"use client"

import { 
  useState,
  useEffect,  
} from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { 
  House, 
  Newspaper,
  Square,
  MessageSquareText,
} from "lucide-react";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: "House" },
  { name: "Posts", href: "/dashboard/posts", icon: "Newspaper" },
  { name: "Comments", href: "/dashboard/comments", icon: "MessageSquareText"}
];

const LinkIcon = ({ 
  icon,
}: {
  icon: string;
}) => {
  switch (icon) {
    case "House": return <House />
    case "Newspaper": return <Newspaper />
    case "MessageSquareText": return <MessageSquareText />
    default: return <Square />
  }
};

export default function Navigation() {
  const [tooltipSide, setTooltipSide] = useState<"right" | "top" | "bottom" | "left">("right");
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setTooltipSide(window.innerWidth < 768 ? "top" : "right");
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="p-3 flex md:flex-col gap-3 bg-zinc-900 text-zinc-100 rounded-xl sticky top-3 order-last md:order-first">
      { links.map(link => {
        return (
          <TooltipProvider delayDuration={300} key={link.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className={clsx(
                    "p-3 hover:bg-zinc-100 focus:bg-zinc-100 hover:text-zinc-900 focus:text-zinc-900 rounded-xl transition",
                    {
                      "bg-zinc-100 text-zinc-900 hover:bg-zinc-300 focus:bg-zinc-300": pathname === link.href,
                    }
                  )}
                >
                  <LinkIcon icon={link.icon} />
                </Link>
              </TooltipTrigger>
              <TooltipContent side={tooltipSide} sideOffset={24}>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      }) }
    </nav>
  );
}
