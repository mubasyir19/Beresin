"use client";

import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import CardProject from "@/components/organism/CardProject";
import { ProjectPriority, Status } from "@/types";
import { useProject } from "@/hooks/project/useProject";
import { Project } from "@/types/project";
import Modal from "@/components/organism/Modal";
import InputField from "@/components/molecules/InputField";
import { priority, status } from "@/config/constant";

export default function ProjectPage() {
  const { projects } = useProject();

  const [modalOpen, setModalOpen] = useState(false);

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
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-xs text-neutral-100"
          >
            <PlusIcon className="size-4" />
            <span>Tambah</span>
          </button>
        </div>
      </div>
      <div className="mt-8 overflow-x-auto">
        <div className="min-w-lg flex snap-x snap-mandatory gap-4">
          <div className="flex shrink-0 flex-col gap-4 lg:basis-1/4">
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
          <div className="flex shrink-0 flex-col gap-4 lg:basis-1/4">
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
          <div className="flex shrink-0 flex-col gap-4 lg:basis-1/4">
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
          <div className="flex shrink-0 flex-col gap-4 lg:basis-1/4">
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
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Tambah Projek"
      >
        <form className="flex flex-col gap-3">
          <InputField
            type="text"
            label="Nama Projek"
            name="name"
            placeholder="Ketik nama projek"
          />
          <InputField
            type="text"
            label="Deskripsi"
            name="description"
            placeholder="Ketik deskripsi singkat"
          />
          <div className="flex flex-col gap-1">
            <label
              htmlFor="date_start"
              className="text-xs text-white md:text-sm lg:text-base"
            >
              Tanggal Mulai
            </label>
            <input
              type="date"
              name="date_start"
              className="rounded-md border border-neutral-500 bg-secondary-1 px-3 py-1 text-neutral-100 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="date_end"
              className="text-xs text-white md:text-sm lg:text-base"
            >
              Deadline
            </label>
            <input
              type="date"
              name="date_end"
              className="rounded-md border border-neutral-500 bg-secondary-1 px-3 py-1 text-neutral-100 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="date_end"
              className="text-xs text-white md:text-sm lg:text-base"
            >
              Status Projek
            </label>
            <select
              name="status"
              id="status"
              className="rounded-md border border-neutral-500 bg-secondary-1 px-3 py-1 text-neutral-100 focus:border-primary focus:outline-none"
            >
              {status.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="date_end"
              className="text-xs text-white md:text-sm lg:text-base"
            >
              Prioritas Projek
            </label>
            <select
              name="priority"
              id="priority"
              className="rounded-md border border-neutral-500 bg-secondary-1 px-3 py-1 text-neutral-100 focus:border-primary focus:outline-none"
            >
              {priority.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <button className="w-full rounded-md bg-primary py-2 text-xs text-white hover:bg-primary/80 md:text-sm lg:text-base">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
