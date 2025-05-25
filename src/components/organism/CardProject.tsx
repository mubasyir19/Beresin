import React from "react";
import { getInitialsFromTwoWords } from "../initialName";
import Badge from "../atoms/Badge";
import ProgressBar from "../molecules/ProgressBar";
import AvatarGroup from "../molecules/AvatarGroup";
import { ProjectPriority, Status, TeamMember } from "@/types";
import Link from "next/link";
import StatusBadge from "../atoms/StatusBadge";

interface CardProjectProps {
  name: string;
  description: string;
  status: Status;
  priority: ProjectPriority;
  progress: number;
  totalTasks: number;
  taskProgress: number;
  members: TeamMember[];
}

export default function CardProject({
  name,
  description,
  status,
  priority,
  progress,
  totalTasks,
  taskProgress,
  members,
}: CardProjectProps) {
  return (
    <div className="bg-secondary-1 border-border rounded-lg border px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="bg-secondary-2 flex size-8 items-center justify-center rounded-full">
          <p className="text-sm text-white">{getInitialsFromTwoWords(name)}</p>
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
        Tasks Done :{" "}
        <span className="text-secondary-3 font-bold">{taskProgress}</span> /{" "}
        {totalTasks}
      </p>
      <div className="mt-4">
        <ProgressBar percentage={progress} />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <AvatarGroup members={members} maxVisible={3} />
        <Link href={`#`} className="text-primary text-xs underline">
          details
        </Link>
      </div>
    </div>
  );
}
