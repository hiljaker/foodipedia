export interface User {
  id: number | null;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  isAdmin: boolean;
}
