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
