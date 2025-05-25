"use client";

import React from "react";
import ListMenu from "../molecules/ListMenu";
import { listMenuItems } from "@/data";

export default function Sidebar() {
  return (
    <aside className="bg-dark-blue border-border w-64 overflow-y-auto border-r">
      <div className="p-4">
        <h1 className="text-xl font-bold text-white">Beresin</h1>
      </div>
      <div className="flex flex-col gap-y-2 pr-4">
        {listMenuItems.map((item) => (
          <ListMenu key={item.text} item={item} />
        ))}
      </div>
      <hr className="my-4 w-full border border-neutral-600" />
      <div className="">
        <div id="profile" className="flex items-center gap-x-2 px-4 py-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-red-600">
            <p className="text-xs uppercase text-white">MM</p>
          </div>
          <div className="">
            <p className="text-sm font-semibold text-white">Mahdy Mubasyir</p>
            <p className="text-xs text-neutral-500">Frontend Developer</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
