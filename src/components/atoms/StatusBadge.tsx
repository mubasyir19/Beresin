import { StatusProps } from "@/types";
import React from "react";

const STATUS_CLASSES = {
  NOT_STARTED: {
    bg: "bg-red-600/30",
    text: "text-red-600",
    dot: "bg-red-600",
  },
  IN_PROGRESS: {
    bg: "bg-yellow-600/30",
    text: "text-yellow-600",
    dot: "bg-yellow-600",
  },
  ON_HOLD: {
    bg: "bg-cyan-600/30",
    text: "text-cyan-600",
    dot: "bg-cyan-600",
  },
  COMPLETED: {
    bg: "bg-emerald-600/30",
    text: "text-emerald-600",
    dot: "bg-emerald-600",
  },
  DEFAULT: {
    bg: "bg-blue-600/30",
    text: "text-blue-600",
    dot: "bg-blue-600",
  },
} as const;

export default function StatusBadge({ status }: StatusProps) {
  const classes =
    STATUS_CLASSES[status as keyof typeof STATUS_CLASSES] ??
    STATUS_CLASSES.DEFAULT;

  return (
    <div
      className={`mt-2 flex w-fit items-center gap-x-2 rounded-2xl px-2 py-1 ${classes.bg}`}
    >
      <div className={`size-2 rounded-full ${classes.dot}`} />
      <p className={`text-[10px] ${classes.text}`}>{status}</p>
    </div>
  );
}
