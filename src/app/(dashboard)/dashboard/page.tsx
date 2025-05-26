import React from "react";
import { FolderOpenIcon, QueueListIcon } from "@heroicons/react/24/outline";

export default function MainPageDashboard() {
  return (
    <div>
      <div className="">
        <div className="">
          <h1 className="text-2xl font-semibold text-white">
            Selamat Datang, Mahdy
          </h1>
          <p className="text-sm text-neutral-400">
            Diam, males-malesan, Bergerak, beresin kerjaan
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-secondary-1 px-5 py-4">
          <p className="flex items-center gap-x-2 text-xs font-semibold text-neutral-400">
            <FolderOpenIcon className="size-4" />
            <span>Projects</span>
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-neutral-100">25</h2>
        </div>
        <div className="rounded-lg border border-border bg-secondary-1 px-5 py-4">
          <p className="flex items-center gap-x-2 text-xs font-semibold text-neutral-400">
            <QueueListIcon className="size-4" />
            <span>Task</span>
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-neutral-100">50</h2>
        </div>
      </div>
    </div>
  );
}
