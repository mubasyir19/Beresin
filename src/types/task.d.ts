export interface Task {
  id: string;
  projectId: string;
  name: string;
  description: string;
  date_start: Date;
  date_end: Date;
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
  priority: "HIGH" | "MEDIUM" | "LOW";
  created_by: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CardTaskProps {
  id: string;
  projectId: string;
  name: string;
  description: string;
  date_start: string | Date;
  date_end: string | Date;
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
  priority: "HIGH" | "MEDIUM" | "LOW";
}

export interface addTaskPayload {
  name: string;
  projectId: string;
  description?: string;
  date_start: string;
  date_end: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
  priority: "HIGH" | "MEDIUM" | "LOW";
  created_by: string;
}

export interface updateStatusTaskPayload {
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
}

export interface updatePriorityTaskPayload {
  status: "HIGH" | "MEDIUM" | "LOW";
}
