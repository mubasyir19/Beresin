"use client";

import Link from "next/link";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import CardProject from "@/components/organism/CardProject";
import { ProjectPriority, Status } from "@/types";
import { useProject } from "@/hooks/project/useProject";
import { Project } from "@/types/project";

export default function ProjectPage() {
  const { projects } = useProject();
  console.log("ini datanya = ", projects);

  const notStartedProject = projects.filter(
    (project: Project) => project.status === "NOT_STARTED",
  );
  const inProgressProject = projects.filter(
    (project: Project) => project.status === "IN_PROGRESS",
  );
  const onHoldProject = projects.filter(
    (project: Project) => project.status === "ON_HOLD",
  );
  const completedProject = projects.filter(
    (project: Project) => project.status === "COMPLETED",
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-semibold text-white">Project</h1>
        </div>
        <div className="">
          <Link
            href={`#`}
            className="flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm text-neutral-100"
          >
            <PlusIcon className="size-4" />
            <span>Tambah Project</span>
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4">
            <div className="border-b-2 border-red-600 py-3">
              <p className="text-center text-base font-medium text-white">
                Belum Mulai
              </p>
            </div>
            {notStartedProject.length > 0 ? (
              notStartedProject.map((item: Project) => {
                const totalTasks = item.Task?.length || 0;
                const completedTasks =
                  item.Task?.filter((task) => task.status === "COMPLETED")
                    .length || 0;
                const progress =
                  totalTasks > 0
                    ? Math.round((completedTasks / totalTasks) * 100)
                    : 0;
                return (
                  <CardProject
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    date_start={item.date_start ?? new Date()}
                    date_end={item.date_end ?? new Date()}
                    status={item.status as Status}
                    priority={item.priority as ProjectPriority}
                    progress={progress}
                    totalTasks={item.Task?.length}
                    taskProgress={completedTasks}
                    members={item.ProjectMember ?? []}
                  />
                );
              })
            ) : (
              <p className="italic text-gray-500">
                No projects in this status.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-b-2 border-yellow-600 py-3">
              <p className="text-center text-base font-medium text-white">
                In Progress
              </p>
            </div>
            {inProgressProject.length > 0 ? (
              inProgressProject.map((item: Project) => {
                const totalTasks = item.Task?.length || 0;
                const completedTasks =
                  item.Task?.filter((task) => task.status === "COMPLETED")
                    .length || 0;
                const progress =
                  totalTasks > 0
                    ? Math.round((completedTasks / totalTasks) * 100)
                    : 0;
                return (
                  <CardProject
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    date_start={item.date_start ?? new Date()}
                    date_end={item.date_end ?? new Date()}
                    status={item.status as Status}
                    priority={item.priority as ProjectPriority}
                    progress={progress}
                    totalTasks={item.Task?.length}
                    taskProgress={completedTasks}
                    members={item.ProjectMember ?? []}
                  />
                );
              })
            ) : (
              <p className="italic text-gray-500">
                No projects in this status.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-b-2 border-cyan-600 py-3">
              <p className="text-center text-base font-medium text-white">
                Review
              </p>
            </div>
            {onHoldProject.length > 0 ? (
              onHoldProject.map((item: Project) => {
                const totalTasks = item.Task?.length || 0;
                const completedTasks =
                  item.Task?.filter((task) => task.status === "COMPLETED")
                    .length || 0;
                const progress =
                  totalTasks > 0
                    ? Math.round((completedTasks / totalTasks) * 100)
                    : 0;
                return (
                  <CardProject
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    date_start={item.date_start ?? new Date()}
                    date_end={item.date_end ?? new Date()}
                    status={item.status as Status}
                    priority={item.priority as ProjectPriority}
                    progress={progress}
                    totalTasks={item.Task?.length}
                    taskProgress={completedTasks}
                    members={item.ProjectMember ?? []}
                  />
                );
              })
            ) : (
              <p className="italic text-gray-500">
                No projects in this status.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-b-2 border-emerald-600 py-3">
              <p className="text-center text-base font-medium text-white">
                Selesai
              </p>
            </div>
            {completedProject.length > 0 ? (
              completedProject.map((item: Project) => {
                const totalTasks = item.Task?.length || 0;
                const completedTasks =
                  item.Task?.filter((task) => task.status === "COMPLETED")
                    .length || 0;
                const progress =
                  totalTasks > 0
                    ? Math.round((completedTasks / totalTasks) * 100)
                    : 0;
                return (
                  <CardProject
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    date_start={item.date_start ?? new Date()}
                    date_end={item.date_end ?? new Date()}
                    status={item.status as Status}
                    priority={item.priority as ProjectPriority}
                    progress={progress}
                    totalTasks={item.Task?.length}
                    taskProgress={completedTasks}
                    members={item.ProjectMember ?? []}
                  />
                );
              })
            ) : (
              <p className="italic text-gray-500">
                No projects in this status.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
