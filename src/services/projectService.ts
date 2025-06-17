import { API_BASE_URL } from "@/config/constant";
import {
  addMemberProjectPayload,
  createProjectPayload,
  ProjectStatus,
  updatePriorityProjectPayload,
} from "@/types/project";
import { getAuthToken } from "./authService";
import { CommentPayload } from "@/types/comment";

export const getProjects = async () => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/projects`, {
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

export const addProject = async (payload: createProjectPayload) => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/project/add`, {
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

export const addProjectMember = async (payload: addMemberProjectPayload) => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/project/member/add`, {
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

export const updateStatus = async (id: string, newStatus: ProjectStatus) => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/project/status/${id}/edit`, {
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

export const updatePriority = async (payload: updatePriorityProjectPayload) => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/project/priority/edit`, {
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

export const commentProject = async (projectId: string) => {
  try {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/project/${projectId}/comments`,
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

export const addCommentProject = async (
  projectId: string,
  payload: CommentPayload,
) => {
  try {
    const token = getAuthToken();
    const response = await fetch(
      `${API_BASE_URL}/project/${projectId}/comment`,
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
