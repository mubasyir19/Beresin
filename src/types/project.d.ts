export interface createProjectPayload {
  name: string;
  description: string;
  date_start: string;
  date_end: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
  priority: "High" | "Medium" | "Low";
  created_by: string;
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
