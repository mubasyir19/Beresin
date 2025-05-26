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
            <span>Tugas</span>
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-neutral-100">50</h2>
        </div>
        <div className="rounded-lg border border-border bg-secondary-1 px-5 py-4">
          <p className="flex items-center gap-x-2 text-xs font-semibold text-neutral-400">
            <QueueListIcon className="size-4" />
            <span>Projek Aktif</span>
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-neutral-100">50</h2>
        </div>
        <div className="rounded-lg border border-border bg-secondary-1 px-5 py-4">
          <p className="flex items-center gap-x-2 text-xs font-semibold text-neutral-400">
            <QueueListIcon className="size-4" />
            <span>Projek Selesai</span>
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-neutral-100">50</h2>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3">
        <div className="rounded-lg border border-neutral-500 bg-secondary-1 p-4">
          <h3 className="text-xl font-semibold text-neutral-100">
            Ringkasan Tugas
          </h3>
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex items-center gap-x-2">
              <div className="size-3 rounded-full bg-red-500"></div>
              <p className="text-sm text-neutral-100">9</p>
              <p className="text-sm text-red-500">Belum Mulai</p>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="size-3 rounded-full bg-yellow-400"></div>
              <p className="text-sm text-neutral-100">4</p>
              <p className="text-sm text-yellow-400">Dikerjakan</p>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="size-3 rounded-full bg-cyan-400"></div>
              <p className="text-sm text-neutral-100">3</p>
              <p className="text-sm text-cyan-400">Review</p>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="size-3 rounded-full bg-emerald-400"></div>
              <p className="text-sm text-neutral-100">2</p>
              <p className="text-sm text-emerald-400">Selesai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
