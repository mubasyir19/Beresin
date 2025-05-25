import Link from "next/link";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import CardProject from "@/components/organism/CardProject";
import { listProjects } from "@/data";
import { ProjectPriority, ProjectStatus } from "@/types";

export default function ProjectPage() {
  const notStartedProject = listProjects.filter(
    (project) => project.status === "NOT_STARTED",
  );
  const inProgressProject = listProjects.filter(
    (project) => project.status === "IN_PROGRESS",
  );
  const onHoldProject = listProjects.filter(
    (project) => project.status === "ON_HOLD",
  );
  const completedProject = listProjects.filter(
    (project) => project.status === "COMPLETED",
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
            className="bg-primary flex items-center gap-x-2 rounded-md px-4 py-2 text-sm text-neutral-100"
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
              notStartedProject.map((project) => (
                <CardProject
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  status={project.status as ProjectStatus}
                  priority={project.priority as ProjectPriority}
                  progress={project.progress}
                  totalTasks={project.totalTask}
                  taskProgress={project.taskProgress}
                  members={project.members}
                />
              ))
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
              inProgressProject.map((project) => (
                <CardProject
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  status={project.status as ProjectStatus}
                  priority={project.priority as ProjectPriority}
                  progress={project.progress}
                  totalTasks={project.totalTask}
                  taskProgress={project.taskProgress}
                  members={project.members}
                />
              ))
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
              onHoldProject.map((project) => (
                <CardProject
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  status={project.status as ProjectStatus}
                  priority={project.priority as ProjectPriority}
                  progress={project.progress}
                  totalTasks={project.totalTask}
                  taskProgress={project.taskProgress}
                  members={project.members}
                />
              ))
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
              completedProject.map((project) => (
                <CardProject
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  status={project.status as ProjectStatus}
                  priority={project.priority as ProjectPriority}
                  progress={project.progress}
                  totalTasks={project.totalTask}
                  taskProgress={project.taskProgress}
                  members={project.members}
                />
              ))
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
