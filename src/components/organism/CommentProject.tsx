import { getInitialsFromTwoWords } from "@/helpers/initialName";
import { getTimeInWIB } from "@/helpers/timeWIB";
import { useComment } from "@/hooks/comment/useComment";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";

export default function CommentProject({ projectId }: { projectId: string }) {
  const { comments, fetchCommentProject } = useComment();

  useEffect(() => {
    if (projectId) {
      fetchCommentProject(projectId);
    }
  }, [fetchCommentProject, projectId]);

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
            <p className="text-xs">Belum ada komentar</p>
          )}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            name="content"
            placeholder="Ketik komentar ..."
            className="flex-1 rounded-md border border-neutral-500 bg-secondary-1 px-3 py-2 text-sm text-neutral-100 focus:border-primary focus:outline-none"
          />
          <button className="ml-2 aspect-square h-full rounded-md bg-primary">
            <PaperAirplaneIcon className="mx-auto size-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
