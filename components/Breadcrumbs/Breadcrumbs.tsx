import React from "react";
import Link from "next/link";

export interface BreadCrumbsProps {
  links: Array<{
    href: string;
    label: string;
  }>;
}
export function Breadcrumbs({ links }: BreadCrumbsProps) {
  return (
    <div className="flex items-center space-x-2 text-gray-400 text-sm">
      <Link href="/">Home</Link>
      <span>/</span>
      {links.map((link, index) => (
        <React.Fragment key={link.href}>
          <Link href={link.href}>{link.label}</Link>
          {index < links.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
