import { allowedTransitions } from "@/data";
import { updateStatus } from "@/services/projectService";
import { ProjectStatus } from "@/types/project";
import React from "react";
import { toast } from "sonner";

interface StatusDropdownProps {
  id: string;
  currentStatus: ProjectStatus;
}

export default function DropdownStatus({
  id,
  currentStatus,
}: StatusDropdownProps) {
  const options = allowedTransitions[currentStatus] || [];

  const handleChange = async (newStatus: ProjectStatus) => {
    try {
      const response = await updateStatus(id, newStatus);
      console.log("ini hasil response nya =", response);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Gagal memperbarui status");
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-white">Update Status</label>
      <select
        className="rounded-md border border-neutral-500 bg-secondary-1 p-2 text-sm text-white"
        onChange={(e) => handleChange(e.target.value as ProjectStatus)}
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
    </div>
  );
}
