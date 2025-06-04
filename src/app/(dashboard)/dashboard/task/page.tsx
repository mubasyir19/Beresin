"use client";

import CardTask from "@/components/organism/CardTask";
import { useTask } from "@/hooks/task/useTask";
import { Status } from "@/types";
import { Task } from "@/types/task";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function TaskPage() {
  const { tasks } = useTask();

  const notStartedTask =
    tasks?.filter((task) => task.status === "NOT_STARTED") || [];
  const inProgressTask =
    tasks?.filter((task) => task.status === "IN_PROGRESS") || [];
  const onHoldTask = tasks?.filter((task) => task.status === "ON_HOLD") || [];
  const completedTask =
    tasks?.filter((task) => task.status === "COMPLETED") || [];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-semibold text-white">Tugas</h1>
        </div>
        <div className="">
          <Link
            href={`#`}
            className="flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-sm text-neutral-100"
          >
            <PlusIcon className="size-4" />
            <span>Tambah</span>
          </Link>
        </div>
      </div>
      <div className="mt-8 overflow-x-auto">
        <div className="flex gap-4">
          <div className="flex shrink-0 flex-col gap-4 lg:basis-1/4">
            <div className="border-b-2 border-red-600 py-3">
              <p className="text-center text-base font-medium text-white">
                Belum Mulai
              </p>
            </div>
            {notStartedTask?.length > 0 ? (
              notStartedTask.map((task: Task) => {
                return (
                  <CardTask
                    key={task.name}
                    id={task.id}
                    projectId={task.projectId}
                    name={task.name}
                    description={task.description}
                    date_start={task.date_start ?? new Date()}
                    date_end={task.date_end ?? new Date()}
                    status={task.status as Status}
                    priority={task.priority}
                  />
                );
              })
            ) : (
              <p className="italic text-gray-500">No tasks in this status.</p>
            )}
          </div>
          <div className="flex shrink-0 flex-col gap-4 lg:basis-1/4">
            <div className="border-b-2 border-yellow-600 py-3">
              <p className="text-center text-base font-medium text-white">
                In Progress
              </p>
            </div>
            {inProgressTask?.length > 0 ? (
              inProgressTask.map((task: Task) => (
                <CardTask
                  key={task.name}
                  id={task.id}
                  projectId={task.projectId}
                  name={task.name}
                  description={task.description}
                  date_start={task.date_start ?? new Date()}
                  date_end={task.date_end ?? new Date()}
                  status={task.status as Status}
                  priority={task.priority}
                />
              ))
            ) : (
              <p className="italic text-gray-500">No tasks in this status.</p>
            )}
          </div>
          <div className="flex shrink-0 flex-col gap-4 lg:basis-1/4">
            <div className="border-b-2 border-cyan-600 py-3">
              <p className="text-center text-base font-medium text-white">
                Review
              </p>
            </div>
            {onHoldTask?.length > 0 ? (
              onHoldTask.map((task: Task) => (
                <CardTask
                  key={task.name}
                  id={task.id}
                  projectId={task.projectId}
                  name={task.name}
                  description={task.description}
                  date_start={task.date_start ?? new Date()}
                  date_end={task.date_end ?? new Date()}
                  status={task.status as Status}
                  priority={task.priority}
                />
              ))
            ) : (
              <p className="italic text-gray-500">No tasks in this status.</p>
            )}
          </div>
          <div className="flex shrink-0 flex-col gap-4 lg:basis-1/4">
            <div className="border-b-2 border-emerald-600 py-3">
              <p className="text-center text-base font-medium text-white">
                Selesai
              </p>
            </div>
            {completedTask?.length > 0 ? (
              completedTask.map((task: Task) => (
                <CardTask
                  key={task.name}
                  id={task.id}
                  projectId={task.projectId}
                  name={task.name}
                  description={task.description}
                  date_start={task.date_start ?? new Date()}
                  date_end={task.date_end ?? new Date()}
                  status={task.status as Status}
                  priority={task.priority}
                />
              ))
            ) : (
              <p className="italic text-gray-500">No tasks in this status.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
