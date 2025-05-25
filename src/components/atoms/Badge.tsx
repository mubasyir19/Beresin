import { BadgeProps, BadgeStatus } from "@/types";
import React from "react";

export default function Badge({ status }: BadgeProps) {
  const colorBadge = (status: BadgeStatus) => {
    switch (status) {
      case "High":
        return "bg-red-600/30 text-red-600";
      case "Medium":
        return "bg-yellow-600/30 text-yellow-600";
      case "Low":
        return "bg-purple-600/30 text-purple-600";
      default:
        return "bg-blue-600/30 text-blue-600";
    }
  };

  return (
    <span className={`rounded-md px-3 py-1 text-xs ${colorBadge(status)}`}>
      {status}
    </span>
  );
}
