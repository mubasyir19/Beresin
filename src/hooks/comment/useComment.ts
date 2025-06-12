import { addCommentProject, commentProject } from "@/services/projectService";
import { addCommentTask, commentTask } from "@/services/taskService";
import { Comment, CommentPayload } from "@/types/comment";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export const useComment = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCommentProject = useCallback(async (projectId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await commentProject(projectId);

      if (response.status === 200 && Array.isArray(response.data)) {
        setComments(response.data);
      } else if (response.status === 200 && response.data === null) {
        setComments([]);
      } else {
        throw new Error(response.message || "failed fetch project");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("an error occured when get data");
      }
    }
  }, []);

  const fetchCommentTask = useCallback(
    async (projectId: string, taskId: string) => {
      if (!taskId) return;
      setIsLoading(true);
      setError(null);
      try {
        const response = await commentTask(projectId, taskId);

        if (response.status === 200 && Array.isArray(response.data)) {
          setComments(response.data);
        } else if (response.status === 200 && response.data === null) {
          setComments([]);
        } else {
          throw new Error(response.message || "failed fetch project");
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("an error occured when get data");
        }
      }
    },
    [],
  );

  const addProjectComment = useCallback(
    async (projectId: string, payload: CommentPayload) => {
      setIsLoading(true);
      setError(null);
      try {
        await addCommentProject(projectId, payload);
        toast.success("Komentar berhasil ditambahkan ke proyek");
        await fetchCommentProject(projectId);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          toast.error(error.message);
        } else {
          setError("An error occurred when adding comment");
          toast.error("An error occurred when adding comment");
        }
      } finally {
        setIsLoading(false);
      }
    },
    [fetchCommentProject],
  );

  const addTaskComment = useCallback(
    async (projectId: string, taskId: string, payload: CommentPayload) => {
      setIsLoading(true);
      setError(null);
      try {
        await addCommentTask(projectId, taskId, payload);

        toast.success("Proyek berhasil dibuat!");
        await fetchCommentTask(projectId, taskId);
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
    [fetchCommentTask],
  );

  return {
    comments,
    isLoading,
    error,
    fetchCommentProject,
    fetchCommentTask,
    addProjectComment,
    addTaskComment,
  };
};
