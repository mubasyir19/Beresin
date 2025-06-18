import { API_BASE_URL } from "@/config/constant";
import {
  addTaskPayload,
  TaskStatus,
  updatePriorityTaskPayload,
} from "@/types/task";
import { getAuthToken } from "./authService";
import { CommentPayload } from "@/types/comment";

export const getTasks = async () => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const addTask = async (payload: addTaskPayload) => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/task/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateStatus = async (id: string, newStatus: TaskStatus) => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/task/status/${id}/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ newStatus }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updatePriority = async (payload: updatePriorityTaskPayload) => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/task/priority/edit`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const commentTask = async (projectId: string, taskId: string) => {
  try {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/task/${projectId}/${taskId}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const addCommentTask = async (
  projectId: string,
  taskId: string,
  payload: CommentPayload,
) => {
  try {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/project/${projectId}/task/${taskId}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
