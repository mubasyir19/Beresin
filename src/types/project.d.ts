export interface createProjectPayload {
  name: string;
  description: string;
  date_start: string;
  date_end: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
  priority: "High" | "Medium" | "Low";
  created_by: string;
}

export interface addMemberProject {
  projectId: string;
  userId: string;
  role: Member;
  joined_at: Date;
}

export interface updateStatusProject {
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";
}

export interface updatePriorityProject {
  status: "High" | "Medium" | "Low";
}
