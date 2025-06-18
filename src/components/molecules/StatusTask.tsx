import { updateStatus } from "@/services/taskService";
import { TaskStatus } from "@/types/task";
import React from "react";
import { toast } from "sonner";

export default function StatusTask({ id }: { id: string }) {
  const handleChange = async (newStatus: TaskStatus) => {
    try {
      const response = await updateStatus(id, newStatus);
      console.log("ini hasil diubah = ", response);
      toast.success("Berhasil memperbarui status");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Gagal memperbarui status");
      }
    }
  };
  return (
    <div className="mt-3 flex flex-col gap-2">
      <label className="text-base font-semibold text-white">
        Update Status
      </label>
      <select
        className="rounded-md border border-neutral-500 bg-secondary-1 p-2 text-sm text-white"
        onChange={(e) => handleChange(e.target.value as TaskStatus)}
        defaultValue=""
      >
        <option value="" disabled>
          Pilih status baru
        </option>
        <option value="NOT_STARTED">Not Started</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="ON_HOLD">On Hold</option>
        <option value="COMPLETED">Completed</option>
      </select>
    </div>
  );
}
