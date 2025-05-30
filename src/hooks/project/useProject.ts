import { addProject, getProjects } from "@/services/projectService";
import { createProjectPayload, Project } from "@/types/project";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export const useProject = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getProjects();

      console.log(response);

      if (response.status === 200) {
        setProjects(response.data);
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

  const createProject = useCallback(async (payload: createProjectPayload) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await addProject(payload);

      console.log("hasil tambah data = ", response);
      toast.success("Proyek berhasil dibuat!");
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
  }, []); // Dependensi kosong karena fungsi ini tidak bergantung pada state/props lokal yang berubah

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    isLoading,
    error,
    fetchProjects,
    createProject,
  };
};
