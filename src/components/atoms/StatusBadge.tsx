import { ProjectStatus, StatusProps } from "@/types";
import React from "react";

export default function StatusBadge({ status }: StatusProps) {
  const colorBadge = (status: ProjectStatus) => {
    switch (status) {
      case "NOT_STARTED":
        return "red-600";
      case "IN_PROGRESS":
        return "yellow-600";
      case "ON_HOLD":
        return "cyan-600";
      case "COMPLETED":
        return "emerald-600";
      default:
        return "blue-600";
    }
  };
  return (
    <div
      className={`mt-2 flex w-fit items-center gap-x-2 rounded-2xl bg-${colorBadge(status)}/30 px-2 py-1`}
      //   className={`mt-2 flex w-fit items-center gap-x-2 rounded-2xl bg-cyan-600/30 px-2 py-1`}
    >
      <div className={`size-3 rounded-full bg-${colorBadge(status)}`}></div>
      {/* <div className={`size-3 rounded-full bg-yellow-600`}></div> */}
      <p className={`text-[10px] text-${colorBadge(status)}`}>{status}</p>
      {/* <p className={`text-[10px] text-cyan-600`}>{status}</p> */}
    </div>
  );
}
