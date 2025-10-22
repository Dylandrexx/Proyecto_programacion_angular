export interface User {
  id: string;
  username: string;
  role: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}
