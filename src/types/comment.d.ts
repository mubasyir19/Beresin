export interface Comment {
  id: string;
  projectId: string;
  taskId: string | null;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: {
    fullname: string;
    username: string;
    bio: string;
    role: string;
  };
}

export interface CommentPayload {
  projectId: string;
  taskId?: string;
  userId: string;
  content: string;
}
