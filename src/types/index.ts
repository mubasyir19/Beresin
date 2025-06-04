import { memberProjectProps } from "./project";

export type BadgeStatus = "HIGH" | "MEDIUM" | "LOW";
export type ProjectPriority = "HIGH" | "MEDIUM" | "LOW";
export type TaskPriority = "HIGH" | "MEDIUM" | "LOW";
export type Status = "NOT_STARTED" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED";

export interface StatusProps {
  status: Status;
}

export interface BadgeProps {
  status: BadgeStatus;
}

export interface AvatarGroupProps {
  members?: memberProjectProps[];
  maxVisible?: number;
}
