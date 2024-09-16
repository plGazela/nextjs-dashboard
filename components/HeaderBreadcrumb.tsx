"use client"

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";

const prepareBreadcrumbList = (pathname: string) => {

  // Split the pathname by "/" and filter out any empty segments, if there are more than 3 crumbs, we collapse the middle ones.
  let crumbs = pathname.split("/").filter(crumb => crumb.length > 0);
  let isCollapsed = false;
  if(crumbs.length > 3) {
    isCollapsed = true;
    crumbs = crumbs.filter((_crumb, index) => index === 0 || index >= crumbs.length-2);
  }

  // Map each crumb into an object with a name and a href (URL), if we are collapsing, insert a placeholder after the first crumb.
  const breadcrumb = crumbs.map( crumb => {
    return {
      name: crumb.charAt(0).toUpperCase() + crumb.slice(1),
      href: pathname.slice(0, pathname.lastIndexOf(crumb)) + crumb,
    };
  });
  isCollapsed ? breadcrumb.splice(1, 0, { 
    name: "Collapse", 
    href: "#", 
  }) : "";

  return breadcrumb;
}

export default function HeaderBreadcrumb() {
  const pathname = usePathname();
  const breadcrumb = prepareBreadcrumbList(pathname);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        { breadcrumb.map((crumb, index) => {
          return (
            <div key={crumb.name} className="flex items-center gap-2.5">
              { crumb.name === "Collapse" ? (
                <BreadcrumbItem>
                  <BreadcrumbEllipsis className="h-0" />
                </BreadcrumbItem> 
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>
                </BreadcrumbItem>
              ) }
              { index < breadcrumb.length-1 ? <BreadcrumbSeparator /> : "" }
            </div>
          );
        }) }
      </BreadcrumbList>
    </Breadcrumb>
  );
}
