import { Status } from "@/types";

export const statusClasses: Record<
  Status,
  { bg: string; text: string; dot: string }
> = {
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
};
