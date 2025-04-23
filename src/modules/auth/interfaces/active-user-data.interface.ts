export interface ActiveUserData {
  sub: number;
  email: string;
  permissions?: string[];
  roles?: string[];
}
