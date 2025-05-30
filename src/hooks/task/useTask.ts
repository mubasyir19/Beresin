import { getTasks } from "@/services/taskService";
import { Task } from "@/types/task";
import { useCallback, useEffect, useState } from "react";

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

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  return {
    tasks,
    isLoading,
    error,
  };
};
