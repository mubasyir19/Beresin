import { addTask, getTasks, updateStatus } from "@/services/taskService";
import { addTaskPayload, Task, TaskStatus } from "@/types/task";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTask = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getTasks();

      if (response.status === 200) {
        setTasks(response.data);
      } else {
        setError(response.message || "failed fetch project");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("an error occured when get data");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createTask = useCallback(
    async (payload: addTaskPayload) => {
      setIsLoading(true);
      setError(null);
      try {
        await addTask(payload);

        toast.success("Proyek berhasil dibuat!");
        await fetchTask();
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          toast.error(error.message);
        } else {
          setError("an error occured when add data");
          toast.error("an error occured when add data");
        }
      } finally {
        setIsLoading(false);
      }
    },
    [fetchTask],
  );

  const updateTaskStatus = useCallback(
    async (id: string, newStatus: TaskStatus) => {
      setIsLoading(true);
      setError(null);
      try {
        await updateStatus(id, newStatus);
        toast.success("Status tugas berhasil diubah");
        await fetchTask();
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("an error occured");
        }
      }
    },
    [fetchTask],
  );

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  return {
    tasks,
    isLoading,
    error,
    fetchTask,
    createTask,
    updateTaskStatus,
  };
};
