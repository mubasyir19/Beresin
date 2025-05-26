import { statusClasses } from "@/helpers/statusColor";
import { StatusProps } from "@/types";
import React from "react";

export default function StatusBadge({ status }: StatusProps) {
  const classes = statusClasses[status] || {
    bg: "bg-blue-600/30",
    text: "text-blue-600",
    dot: "bg-blue-600",
  };

  return (
    <div
      className={`mt-2 flex w-fit items-center gap-x-2 rounded-2xl ${classes.bg} px-2 py-1`}
    >
      <div className={`size-2 rounded-full ${classes.dot}`}></div>
      <p className={`text-[10px] ${classes.text}`}>{status}</p>
    </div>
  );
}
