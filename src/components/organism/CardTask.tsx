// import { Status, TaskPriority } from "@/types";
import React from "react";
import { getInitialsFromTwoWords } from "../initialName";
import Badge from "../atoms/Badge";
import StatusBadge from "../atoms/StatusBadge";

// interface CardTaskProps {
//   name: string;
//   description: string;
//   status: Status;
//   priority: TaskPriority;
// }

export default function CardTask(
  {
    //   name,
    //   description,
    //   status,
    //   priority,
  },
) {
  return (
    <div className="bg-secondary-1 border-border rounded-lg border px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="bg-secondary-2 flex size-8 items-center justify-center rounded-full">
          <p className="text-sm text-white">
            {getInitialsFromTwoWords("UI Design")}
          </p>
        </div>
        <Badge status="Medium" />
      </div>
      <h2 className="mt-3 line-clamp-1 text-lg font-semibold text-white">
        UI Design
      </h2>
      <StatusBadge status="NOT_STARTED" />
      <p className="mt-2 line-clamp-4 text-xs text-neutral-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio possimus
        facere pariatur. Rerum vitae accusamus praesentium perferendis, unde sit
        quibusdam!
      </p>
      {/* <p className="mt-2 text-xs text-neutral-100">
        Tasks Done :{" "}
        <span className="text-secondary-3 font-bold">{taskProgress}</span> /{" "}
        {totalTasks}
      </p> */}
      {/* <div className="mt-4 flex items-center justify-between">
        <AvatarGroup members={members} maxVisible={3} />
        <Link href={`#`} className="text-primary text-xs underline">
          details
        </Link>
      </div> */}
    </div>
  );
}
