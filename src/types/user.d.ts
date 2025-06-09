export type RoleType = "Admin" | "Member" | "Manager";
export interface JwtPayload {
  id: string;
  fullname: string;
  username: string;
  email: string;
  role: RoleUser;
  iat: number;
  exp: number;
}

export enum RoleUser {
  Admin,
  Manager,
  Member,
}

export interface UserProps {
  id: string;
  fullname: string;
  username: string;
  email: string;
  role: RoleUser;
}

export interface RegisterAccountProps {
  fullname: string;
  email: string;
  username: string;
  bio: string;
  role: RoleType;
  password: string;
  confirmPassword: string;
}

export type RegisterPayload = Omit<RegisterAccountProps, "confirmPassword">;
