import CardTask from "@/components/organism/CardTask";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function TaskPage() {
  // const notStartedTask = listProjects.filter(
  //   (project) => project.status === "NOT_STARTED",
  // );
  // const inProgressTask = listProjects.filter(
  //   (project) => project.status === "IN_PROGRESS",
  // );
  // const onHoldTask = listProjects.filter(
  //   (project) => project.status === "ON_HOLD",
  // );
  // const completedTask = listProjects.filter(
  //   (project) => project.status === "COMPLETED",
  // );

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-semibold text-white">Tugas</h1>
        </div>
        <div className="">
          <Link
            href={`#`}
            className="bg-primary flex items-center gap-x-2 rounded-md px-4 py-2 text-sm text-neutral-100"
          >
            <PlusIcon className="size-4" />
            <span>Tambah Tugas</span>
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
            <div className="mt-4">
              <CardTask />
            </div>
            {/* {notStartedTask.length > 0 ? (
              notStartedTask.map((project) => (
                <CardProject
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  status={project.status as Status}
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
            )} */}
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-b-2 border-yellow-600 py-3">
              <p className="text-center text-base font-medium text-white">
                In Progress
              </p>
            </div>
            {/* {inProgressTask.length > 0 ? (
              inProgressTask.map((project) => (
                <CardProject
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  status={project.status as Status}
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
            )} */}
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-b-2 border-cyan-600 py-3">
              <p className="text-center text-base font-medium text-white">
                Review
              </p>
            </div>
            {/* {onHoldTask.length > 0 ? (
              onHoldTask.map((project) => (
                <CardProject
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  status={project.status as Status}
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
            )} */}
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-b-2 border-emerald-600 py-3">
              <p className="text-center text-base font-medium text-white">
                Selesai
              </p>
            </div>
            {/* {completedTask.length > 0 ? (
              completedTask.map((project) => (
                <CardProject
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  status={project.status as Status}
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
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
