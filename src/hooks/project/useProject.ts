import {
  addProject,
  getProjects,
  updateStatus,
} from "@/services/projectService";
import { createProjectPayload, Project, ProjectStatus } from "@/types/project";
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

      if (response.status === 200 && Array.isArray(response.data)) {
        setProjects(response.data);
      } else if (response.status === 200 && response.data === null) {
        setProjects([]);
      } else {
        throw new Error(response.message || "failed fetch project");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("an error occured when get data");
      }
      setProjects([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createProject = useCallback(
    async (payload: createProjectPayload) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await addProject(payload);

        console.log("hasil tambah data = ", response);
        toast.success("Proyek berhasil dibuat!");
        await fetchProjects();
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
    [fetchProjects],
  );

  const updateProjectStatus = useCallback(
    async (id: string, newStatus: ProjectStatus) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await updateStatus(id, newStatus);
        // await updateStatus(id, payload);

        console.log(`harusnya berubah ke status baru yaitu ${status}`);
        console.log("hasil update status = ", response);
        toast.success("Status projek berhasil diubah");
        await fetchProjects();
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          toast.error(error.message);
        } else {
          setError("An error occurred when update status");
          toast.error("An error occurred when update status");
        }
      } finally {
        setIsLoading(false);
      }
    },
    [fetchProjects],
  );

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    isLoading,
    error,
    fetchProjects,
    createProject,
    updateProjectStatus,
  };
};
