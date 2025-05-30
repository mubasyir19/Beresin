import { API_BASE_URL } from "@/config/constant";
import {
  addTaskPayload,
  updatePriorityTaskPayload,
  updateStatusTaskPayload,
} from "@/types/task";

export const getTasks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
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

export const addTask = async (payload: addTaskPayload) => {
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

export const updateStatus = async (payload: updateStatusTaskPayload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/task/status/edit`, {
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

export const updatePriority = async (payload: updatePriorityTaskPayload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/task/priority/edit`, {
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
