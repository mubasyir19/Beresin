export interface Task {
  id: string;
  projectId: string;
  name: string;
  description: string;
  date_start: Date;
  date_end: Date;
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
  priority: "High" | "Medium" | "Low";
  created_by: string;
  createdAt: Date;
  updatedAt: Date;
}
