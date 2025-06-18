"use client";

import React, { useEffect, useState } from "react";
import { FolderOpenIcon, QueueListIcon } from "@heroicons/react/24/outline";
import { useProject } from "@/hooks/project/useProject";
import { useTask } from "@/hooks/task/useTask";
import { getProfile } from "@/services/authService";
import { RoleType } from "@/types/user";
import PieChart from "@/components/organism/PieChart";

export default function MainPageDashboard() {
  const { projects } = useProject();
  const { tasks } = useTask();
  const [profile, setProfile] = useState<{
    fullname: string;
    bio: string;
    username: string;
    email: string;
    role: RoleType;
  } | null>(null);

  useEffect(() => {
    const profile = getProfile();
    setProfile({
      fullname: profile?.fullname ?? "",
      bio: profile?.bio ?? "",
      username: profile?.username ?? "",
      email: profile?.email ?? "",
      role: profile?.role ?? "Member",
    });
  }, []);

  const totalProjects = projects.length;
  const totalTasks = tasks.length;
  const activeProjects = projects.filter((p) =>
    ["IN_PROGRESS", "ON_HOLD"].includes(p.status),
  );
  const totalActiveProjects = activeProjects.length;
  const completedProjects = projects.filter((p) => p.status === "COMPLETED");
  const totalCompletedProjects = completedProjects.length;

  // Tugas
  const totalNotStartedTask = tasks.filter(
    (t) => t.status === "NOT_STARTED",
  ).length;
  const totalInProgressTask = tasks.filter(
    (t) => t.status === "IN_PROGRESS",
  ).length;
  const totalOnHoldTask = tasks.filter((t) => t.status === "ON_HOLD").length;
  const totalCompletedTask = tasks.filter(
    (t) => t.status === "COMPLETED",
  ).length;

  // Over Deadline
  const now = new Date();

  const overdueProjects = projects
    .filter((p) => p.date_end && new Date(p.date_end) < now)
    .map((p) => {
      const dateEnd = new Date(p.date_end as string);
      const timeDiff = now.getTime() - dateEnd.getTime();
      const daysOverdue = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      return {
        ...p,
        daysOverdue,
      };
    });
  // const overdueTasks = tasks
  //   .filter((t) => t.date_end && new Date(t.date_end) < now)
  //   .map((t) => {
  //     const dateEnd = new Date(t.date_end as unknown as string);
  //     const timeDiff = now.getTime() - dateEnd.getTime();
  //     const daysOverdue = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  //     return {
  //       ...t,
  //       daysOverdue,
  //     };
  //   });

  return (
    <div>
      <div className="">
        <div className="">
          <h1 className="text-2xl font-semibold text-white">
            Selamat Datang,{" "}
            {profile?.fullname ? (
              <span className="text-primary">{profile?.fullname}</span>
            ) : null}
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
          <h2 className="mt-4 text-2xl font-semibold text-neutral-100">
            {totalProjects}
          </h2>
        </div>
        <div className="rounded-lg border border-border bg-secondary-1 px-5 py-4">
          <p className="flex items-center gap-x-2 text-xs font-semibold text-neutral-400">
            <QueueListIcon className="size-4" />
            <span>Tugas</span>
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-neutral-100">
            {totalTasks}
          </h2>
        </div>
        <div className="rounded-lg border border-border bg-secondary-1 px-5 py-4">
          <p className="flex items-center gap-x-2 text-xs font-semibold text-neutral-400">
            <QueueListIcon className="size-4" />
            <span>Projek Aktif</span>
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-neutral-100">
            {totalActiveProjects}
          </h2>
        </div>
        <div className="rounded-lg border border-border bg-secondary-1 px-5 py-4">
          <p className="flex items-center gap-x-2 text-xs font-semibold text-neutral-400">
            <QueueListIcon className="size-4" />
            <span>Projek Selesai</span>
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-neutral-100">
            {totalCompletedProjects}
          </h2>
        </div>
      </div>
      {/* <div className="mt-5 grid grid-cols-3 gap-4"> */}
      <div className="mt-5 grid grid-cols-2">
        <div className="flex w-full items-center justify-center p-6">
          <div className="size-96 p-6 xl:p-0">
            <PieChart />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-neutral-500 bg-secondary-1 p-4">
            <h3 className="text-xl font-semibold text-neutral-100">
              Ringkasan Tugas
            </h3>
            <div className="mt-3 flex flex-col gap-2">
              <div className="flex items-center gap-x-2">
                <div className="size-3 rounded-full bg-red-500"></div>
                <p className="text-sm text-neutral-100">
                  {totalNotStartedTask}
                </p>
                <p className="text-sm text-red-500">Belum Mulai</p>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="size-3 rounded-full bg-yellow-400"></div>
                <p className="text-sm text-neutral-100">
                  {totalInProgressTask}
                </p>
                <p className="text-sm text-yellow-400">Dikerjakan</p>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="size-3 rounded-full bg-cyan-400"></div>
                <p className="text-sm text-neutral-100">{totalOnHoldTask}</p>
                <p className="text-sm text-cyan-400">Review</p>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="size-3 rounded-full bg-emerald-400"></div>
                <p className="text-sm text-neutral-100">{totalCompletedTask}</p>
                <p className="text-sm text-emerald-400">Selesai</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-500 bg-secondary-1 p-4">
            <h3 className="text-xl font-semibold text-red-500">
              Projek Terlambat
            </h3>
            <ol className="max-h-32 list-inside list-decimal overflow-y-auto">
              {overdueProjects.length ? (
                overdueProjects.map((op) => (
                  <li key={op.id} className="mt-1.5 text-sm text-white">
                    <span>
                      {op.name.length > 25
                        ? `${op.name.slice(0, 20)} ...`
                        : op.name}
                    </span>
                    <span className="ml-4 text-xs text-red-500">
                      lewat {op.daysOverdue} hari
                    </span>
                  </li>
                ))
              ) : (
                <p className="text-sm font-semibold text-secondary-3">
                  tidak ada projek melebihi deadline
                </p>
              )}
              <li className="mt-1.5 text-sm text-white">Projek 1</li>
              <li className="mt-1.5 text-sm text-white">Projek 2</li>
              <li className="mt-1.5 text-sm text-white">Projek 3</li>
              <li className="mt-1.5 text-sm text-white">Projek 4</li>
              <li className="mt-1.5 text-sm text-white">Projek 5</li>
              <li className="mt-1.5 text-sm text-white">Projek 6</li>
              <li className="mt-1.5 text-sm text-white">Projek 7</li>
            </ol>
          </div>
          {/* <div className="rounded-lg border border-neutral-500 bg-secondary-1 p-4">
            <h3 className="text-xl font-semibold text-red-500">
              Tugas Terlambat
            </h3>
            <ol className="max-h-32 list-inside list-decimal overflow-y-auto">
              {overdueTasks.length ? (
                overdueTasks.map((ot) => (
                  <li key={ot.id} className="mt-1.5 text-sm text-white">
                    <span>
                      {ot.name.length > 25
                        ? `${ot.name.slice(0, 20)} ...`
                        : ot.name}
                    </span>
                    <span className="ml-4 text-xs text-red-500">
                      lewat {ot.daysOverdue} hari
                    </span>
                  </li>
                ))
              ) : (
                <p className="text-sm font-semibold text-secondary-3">
                  tidak ada projek melebihi deadline
                </p>
              )}
              <li className="mt-1.5 text-sm text-white">Projek 1</li>
              <li className="mt-1.5 text-sm text-white">Projek 2</li>
              <li className="mt-1.5 text-sm text-white">Projek 3</li>
              <li className="mt-1.5 text-sm text-white">Projek 4</li>
              <li className="mt-1.5 text-sm text-white">Projek 5</li>
              <li className="mt-1.5 text-sm text-white">Projek 6</li>
              <li className="mt-1.5 text-sm text-white">Projek 7</li>
            </ol>
          </div> */}
        </div>
      </div>
    </div>
  );
}
