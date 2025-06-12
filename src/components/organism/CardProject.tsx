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
        <div className="mt-4">
          <AvatarGroup members={members} maxVisible={3} />
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
        {/* <div className="mt-3">
          <h3 className="font-semibold text-neutral-100">Komentar</h3>
          <div className="flex h-60 flex-col">
            <div className="flex-1 overflow-y-auto">
              <div className="p-2">
                <div id="user" className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-full bg-red-600">
                    <p className="text-xs uppercase text-white">
                      {getInitialsFromTwoWords("Mahdy Mubasyir")}
                    </p>
                  </div>
                  <p className="text-xs font-medium text-secondary-3">
                    Mahdy Mubasyir
                  </p>
                  <p className="text-[10px] text-neutral-500">09.10</p>
                </div>
                <div id="content_message" className="mt-2 pl-8">
                  <p className="text-xs text-white">
                    ini adalah komentar pertama
                  </p>
                </div>
              </div>
              <div className="p-2">
                <div id="user" className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-full bg-red-600">
                    <p className="text-xs uppercase text-white">
                      {getInitialsFromTwoWords("Mahdy Mubasyir")}
                    </p>
                  </div>
                  <p className="text-xs font-medium text-secondary-3">
                    Mahdy Mubasyir
                  </p>
                  <p className="text-[10px] text-neutral-500">09.10</p>
                </div>
                <div id="content_message" className="mt-2 pl-8">
                  <p className="text-xs text-white">
                    ini adalah komentar pertama
                  </p>
                </div>
              </div>
              <div className="p-2">
                <div id="user" className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-full bg-red-600">
                    <p className="text-xs uppercase text-white">
                      {getInitialsFromTwoWords("Mahdy Mubasyir")}
                    </p>
                  </div>
                  <p className="text-xs font-medium text-secondary-3">
                    Mahdy Mubasyir
                  </p>
                  <p className="text-[10px] text-neutral-500">09.10</p>
                </div>
                <div id="content_message" className="mt-2 pl-8">
                  <p className="text-xs text-white">
                    ini adalah komentar pertama
                  </p>
                </div>
              </div>
              <div className="p-2">
                <div id="user" className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-full bg-red-600">
                    <p className="text-xs uppercase text-white">
                      {getInitialsFromTwoWords("Mahdy Mubasyir")}
                    </p>
                  </div>
                  <p className="text-xs font-medium text-secondary-3">
                    Mahdy Mubasyir
                  </p>
                  <p className="text-[10px] text-neutral-500">09.10</p>
                </div>
                <div id="content_message" className="mt-2 pl-8">
                  <p className="text-xs text-white">
                    ini adalah komentar pertama
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                name="content"
                placeholder="Ketik komentar ..."
                className="flex-1 rounded-md border border-neutral-500 bg-secondary-1 px-3 py-2 text-sm text-neutral-100 focus:border-primary focus:outline-none"
              />
              <button className="ml-2 aspect-square h-full rounded-md bg-primary">
                <PaperAirplaneIcon className="mx-auto size-5 text-white" />
              </button>
            </div>
          </div>
        </div> */}
        <CommentProject projectId={id} />
      </Modal>
    </>
  );
}
