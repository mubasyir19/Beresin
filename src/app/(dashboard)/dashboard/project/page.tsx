"use client";

import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import CardProject from "@/components/organism/CardProject";
import { ProjectPriority, Status } from "@/types";
import { useProject } from "@/hooks/project/useProject";
import { Project } from "@/types/project";
import Modal from "@/components/organism/Modal";
import FormAddProject from "@/components/organism/FormAddProject";
import { priorityOrder } from "@/config/constant";

export default function ProjectPage() {
  const { projects, fetchProjects } = useProject();

  const [modalOpen, setModalOpen] = useState(false);

  const notStartedProject = projects
    .filter((project: Project) => project.status === "NOT_STARTED")
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  const inProgressProject = projects
    .filter((project: Project) => project.status === "IN_PROGRESS")
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  const onHoldProject = projects
    .filter((project: Project) => project.status === "ON_HOLD")
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  const completedProject = projects
    .filter((project: Project) => project.status === "COMPLETED")
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  const handleSuccess = async () => {
    setModalOpen(false);
    await fetchProjects();
  };

  const calculateProjectProgress = (project: Project) => {
    const totalTasks = project.Task?.length || 0;
    const completedTasks =
      project.Task && Array.isArray(project.Task)
        ? project.Task.filter((task) => task.status === "COMPLETED").length
        : 0;
    const progress =
      totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    return { totalTasks, completedTasks, progress };
  };

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
                const { totalTasks, completedTasks, progress } =
                  calculateProjectProgress(item);
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
                    totalTasks={totalTasks}
                    taskProgress={completedTasks}
                    members={item.ProjectMember ?? []}
                    task={item.Task ?? []}
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
                const { totalTasks, completedTasks, progress } =
                  calculateProjectProgress(item);
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
                    totalTasks={totalTasks}
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
                const { totalTasks, completedTasks, progress } =
                  calculateProjectProgress(item);
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
                    totalTasks={totalTasks}
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
                const { totalTasks, completedTasks, progress } =
                  calculateProjectProgress(item);
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
                    totalTasks={totalTasks}
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
        <FormAddProject onSuccess={handleSuccess} />
      </Modal>
    </div>
  );
}
