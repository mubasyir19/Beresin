import { allowedTransitions } from "@/data";
import { useProject } from "@/hooks/project/useProject";
// import { updateStatus } from "@/services/projectService";
import { ProjectStatus } from "@/types/project";
import React from "react";
// import { toast } from "sonner";

interface StatusDropdownProps {
  id: string;
  currentStatus: ProjectStatus;
}

export default function DropdownStatus({
  id,
  currentStatus,
}: StatusDropdownProps) {
  const { updateProjectStatus, error } = useProject();
  const options = allowedTransitions[currentStatus] || [];

  // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const newStatus = e.target.value as ProjectStatus;
  //   updateProjectStatus(id, newStatus);
  // };

  return (
    <div className="mt-3 flex flex-col gap-2">
      <label className="text-base font-semibold text-white">
        Update Status
      </label>
      <select
        className="rounded-md border border-neutral-500 bg-secondary-1 p-2 text-sm text-white"
        // onChange={handleChange}
        onChange={(e) =>
          updateProjectStatus(id, e.target.value as ProjectStatus)
        }
        defaultValue=""
      >
        <option value="" disabled>
          Pilih status baru
        </option>
        {options.map((status) => (
          <option key={status} value={status}>
            {status.replace("_", " ")}
          </option>
        ))}
      </select>
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
}
