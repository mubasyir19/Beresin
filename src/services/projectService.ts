import { API_BASE_URL } from "@/config/constant";
import {
  addMemberProject,
  createProjectPayload,
  updatePriorityProject,
  updateStatusProject,
} from "@/types/project";

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/project`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`
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
    const response = await fetch(`${API_BASE_URL}/project/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const addProjectMember = async (payload: addMemberProject) => {
  try {
    const response = await fetch(`${API_BASE_URL}/project/member/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateStatus = async (payload: updateStatusProject) => {
  try {
    const response = await fetch(`${API_BASE_URL}/project/status/edit`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updatePriority = async (payload: updatePriorityProject) => {
  try {
    const response = await fetch(`${API_BASE_URL}/project/priority/edit`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
