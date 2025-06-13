import { getInitialsFromTwoWords } from "@/helpers/initialName";
import { getTimeInWIB } from "@/helpers/timeWIB";
import { useComment } from "@/hooks/comment/useComment";
import { getAuthToken } from "@/services/authService";
import { CommentPayload } from "@/types/comment";
import { JwtPayload } from "@/types/user";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function CommentTask({
  projectId,
  taskId,
}: {
  projectId: string;
  taskId: string;
}) {
  const { comments, fetchCommentTask, addTaskComment } = useComment();

  const [dataComment, setDataComment] = useState<CommentPayload>({
    projectId: "",
    taskId: "",
    userId: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = getAuthToken();
    const payloadToken: JwtPayload = jwtDecode(token as string);

    try {
      if (!dataComment.content) {
        toast.error("isi komentar sebelum submit");
        return;
      }

      await addTaskComment(projectId, taskId, {
        ...dataComment,
        projectId: projectId,
        taskId: taskId,
        userId: payloadToken.id,
      });

      setDataComment({
        projectId: "",
        userId: "",
        content: "",
      });
      await fetchCommentTask(projectId, taskId);

      toast.success("berhasil tambah komentar");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    if (projectId && taskId) {
      fetchCommentTask(projectId, taskId);
    }
  }, [fetchCommentTask, projectId, taskId]);

  return (
    <div className="mt-3">
      <h3 className="font-semibold text-neutral-100">Komentar</h3>
      <div className="flex h-60 flex-col">
        <div className="flex-1 overflow-y-auto">
          {comments.length ? (
            comments.map((comment) => (
              <div key={comment.id} className="p-2">
                <div id="user" className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-full bg-red-600">
                    <p className="text-xs uppercase text-white">
                      {getInitialsFromTwoWords(comment.user.fullname)}
                    </p>
                  </div>
                  <p className="text-xs font-medium text-secondary-3">
                    {comment.user.fullname}
                  </p>
                  <p className="text-[10px] text-neutral-500">
                    {getTimeInWIB(comment.createdAt)}
                  </p>
                </div>
                <div id="content_message" className="mt-2 pl-8">
                  <p className="text-xs text-white">{comment.content}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs text-neutral-500">Belum ada komentar</p>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            name="content"
            value={dataComment.content}
            onChange={handleChange}
            placeholder="Ketik komentar ..."
            className="flex-1 rounded-md border border-neutral-500 bg-secondary-1 px-3 py-2 text-sm text-neutral-100 focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            className="ml-2 aspect-square h-full rounded-md bg-primary"
          >
            <PaperAirplaneIcon className="mx-auto size-5 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
}
