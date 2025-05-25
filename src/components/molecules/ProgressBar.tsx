import React from "react";

interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-white">Progress</p>
        <p className="text-xs font-semibold text-white">{`${percentage}%`}</p>
      </div>
      <div className="mt-1 h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="bg-secondary-3 h-1 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </>
  );
}
