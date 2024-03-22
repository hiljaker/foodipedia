import { Table } from "./common.types";

export interface AuthResultType {
  user: User;
  accessToken: string;
}

export interface User extends Table {
  username?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  picture?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  isVerified: boolean;
  isAdmin: boolean;
  verifiedAt: Date | null;
}
