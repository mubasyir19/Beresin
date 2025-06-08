import { Task } from "./task";

export interface Project {
  id: string;
  name: string;
  description: string;
  date_start?: string | Date;
  date_end?: string | Date;
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
  priority: "HIGH" | "MEDIUM" | "LOW";
  created_by: string;
  ProjectMember?: memberProjectProps[] | null;
  Task?: Task[] | null;
}

export interface CardProjectProps {
  id: string;
  name: string;
  description: string;
  date_start: string | Date;
  date_end: string | Date;
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
  priority: "HIGH" | "MEDIUM" | "LOW";
  progress?: number;
  totalTasks?: number;
  taskProgress?: number;
  members?: memberProjectProps[];
  Task?: Task[];
}

export interface createProjectPayload {
  name: string;
  description: string;
  date_start: string;
  date_end: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
  priority: "HIGH" | "MEDIUM" | "LOW";
  created_by: string;
}

export interface memberProjectProps {
  id: string;
  projectId: string;
  userId: string;
  user: {
    fullname: string;
  };
  role: Member;
  joined_at: Date;
}

export interface addMemberProjectPayload {
  projectId: string;
  userId: string;
  role: Member;
  joined_at: Date;
}

export interface updateStatusProjectPayload {
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
}

export interface updatePriorityProjectPayload {
  status: "High" | "Medium" | "Low";
}
