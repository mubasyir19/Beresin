"use client";

import { SidebarMenuProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ListMenu({ item }: SidebarMenuProps) {
  const pathname = usePathname();
  console.log("ini path ", pathname);
  const isActive = pathname == item.href;

  const IconComponent = item.icon;

  return (
    <Link
      href={`${item.href}`}
      className={`group flex w-full cursor-pointer items-center gap-x-4 rounded-r-full px-4 py-2 transition-all duration-100 ${isActive ? "bg-indigo-200" : "hover:bg-indigo-200"}`}
    >
      {IconComponent && (
        <IconComponent
          className={`size-6 ${isActive ? "text-indigo-600" : "text-gray-500 group-hover:text-indigo-600"}`}
        />
      )}
      <p
        className={`font-semibold ${isActive ? "text-indigo-600" : "text-gray-500 group-hover:text-indigo-600"}`}
      >
        {item.text}
      </p>
    </Link>
  );
}
