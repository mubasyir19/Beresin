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

export interface MenuItem {
  text: string;
  href?: string;
  handleClick?: () => void;
  icon: React.ElementType;
}

export interface SidebarMenuProps {
  item: MenuItem;
}

export interface TeamMember {
  id: string;
  name: string;
  colorsPhoto: string;
}

export interface AvatarGroupProps {
  members: TeamMember[];
  maxVisible?: number;
}
