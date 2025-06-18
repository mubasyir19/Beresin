import React, { useState } from "react";
import { getInitialsFromTwoWords } from "../../helpers/initialName";
import Badge from "../atoms/Badge";
import ProgressBar from "../molecules/ProgressBar";
import AvatarGroup from "../molecules/AvatarGroup";
import Link from "next/link";
import StatusBadge from "../atoms/StatusBadge";
import { CardProjectProps } from "@/types/project";
import { formatDate } from "@/helpers/formatDate";
import Modal from "./Modal";
import CommentProject from "./CommentProject";
import DropdownStatus from "../molecules/DropdownStatus";

export default function CardProject({
  id,
  name,
  description,
  date_start,
  date_end,
  status,
  priority,
  progress,
  totalTasks,
  taskProgress,
  members,
  Task,
}: CardProjectProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div className="rounded-lg border border-border bg-secondary-1 px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex size-8 items-center justify-center rounded-full bg-secondary-2">
            <p className="text-sm text-white">
              {getInitialsFromTwoWords(name)}
            </p>
          </div>
          <Badge status={priority} />
        </div>
        <h2 className="mt-3 line-clamp-1 text-lg font-semibold text-white">
          {name}
        </h2>
        <StatusBadge status={status} />
        <p className="mt-2 line-clamp-4 text-xs text-neutral-500">
          {description}
        </p>
        <p className="mt-2 text-xs text-neutral-100">
          Tugas :{" "}
          <span className="font-bold text-secondary-3">{taskProgress}</span> /{" "}
          {totalTasks}
        </p>
        <div className="mt-4 flex flex-col gap-1">
          <p className="text-xs text-white">
            Tanggal Mulai :{" "}
            <span className="font-medium text-secondary-3">
              {formatDate(date_start)}
            </span>
          </p>
          <p className="text-xs text-white">
            Deadline : {formatDate(date_end)}
          </p>
        </div>
        <div className="mt-4">
          <ProgressBar percentage={progress} />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <AvatarGroup members={members} maxVisible={3} />
          <Link
            href={`#`}
            onClick={() => setOpenModal(true)}
            className="text-xs text-primary underline"
          >
            details
          </Link>
        </div>
      </div>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title={name}
      >
        <StatusBadge status={status} />
        <p className="mt-2 line-clamp-4 text-xs text-neutral-500">
          {description}
        </p>
        <p className="mt-2 text-sm text-neutral-100">
          Tugas :{" "}
          <span className="font-bold text-secondary-3">{taskProgress}</span> /{" "}
          {totalTasks}
        </p>
        <div className="mt-4 flex flex-col gap-1">
          <p className="text-sm text-white">
            Tanggal Mulai :{" "}
            <span className="font-medium text-secondary-3">
              {formatDate(date_start)}
            </span>
          </p>
          <p className="text-sm text-white">
            Deadline : {formatDate(date_end)}
          </p>
        </div>
        <div className="mt-4">
          <ProgressBar percentage={progress} />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <AvatarGroup members={members} maxVisible={3} />
          <Link href={`#`} className="text-xs text-primary underline">
            add member
          </Link>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold text-neutral-100">Tugas</h3>
          <ol className="mt-2 list-inside list-decimal space-y-1 text-white">
            {Task?.length ? (
              Task?.map((t, i) => (
                <li key={t.id} className="flex items-center gap-x-2">
                  <p className="text-sm">{i + 1}.</p>{" "}
                  <p className="text-sm">{t.name}</p>
                  <StatusBadge status={t.status} />
                </li>
              ))
            ) : (
              <p className="text-xs">Belum ada tugas yang ditambahkan</p>
            )}
          </ol>
        </div>
        <DropdownStatus id={id} currentStatus={status} />
        <CommentProject projectId={id} />
      </Modal>
    </>
  );
}
