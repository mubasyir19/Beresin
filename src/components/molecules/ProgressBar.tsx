import React from "react";

interface ProgressBarProps {
  percentage?: number;
}

export default function ProgressBar({ percentage = 0 }: ProgressBarProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-white">Progress</p>
        <p className="text-xs font-semibold text-white">{`${percentage}%`}</p>
      </div>
      <div className="mt-1 h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-1 rounded-full bg-secondary-3"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </>
  );
}
