"use client";

import { SidebarMenuProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ListMenu({ item }: SidebarMenuProps) {
  const pathname = usePathname();
  const isActive = pathname == item.href;

  const IconComponent = item.icon;

  return (
    <Link
      href={`${item.href}`}
      className={`group flex w-full cursor-pointer items-center gap-x-4 rounded-r-full border-l-4 px-4 py-2 transition-all duration-100 ${isActive ? "border-primary" : "border-transparent"}`}
    >
      {IconComponent && (
        <IconComponent
          className={`size-6 ${isActive ? "text-primary" : "text-gray-500 group-hover:text-primary"}`}
        />
      )}
      <p
        className={`font-medium ${isActive ? "text-primary" : "text-gray-500 group-hover:text-primary"}`}
      >
        {item.text}
      </p>
    </Link>
  );
}
