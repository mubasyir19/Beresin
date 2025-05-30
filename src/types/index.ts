import { memberProjectProps } from "./project";

export type BadgeStatus = "High" | "Medium" | "Low";
export type ProjectPriority = "High" | "Medium" | "Low";
export type TaskPriority = "High" | "Medium" | "Low";
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
