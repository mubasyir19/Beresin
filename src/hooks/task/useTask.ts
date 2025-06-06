import { addTask, getTasks } from "@/services/taskService";
import { addTaskPayload, Task } from "@/types/task";
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
        throw new Error(response.message || "failed fetch project");
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
        const response = await addTask(payload);

        console.log("hasil tambah data = ", response);
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

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  return {
    tasks,
    fetchTask,
    createTask,
    isLoading,
    error,
  };
};
