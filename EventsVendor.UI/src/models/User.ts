export interface UserRegisterRequest {
  email: string;
  password: string;
  role?: "USER" | "ADMIN";
}

export interface UserRegisterResponse {
    
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface AuthTokenResponse {
  token: string;
  expiration: string;
}
