import {
  AuthTokenResponse,
  UserLoginRequest,
  UserRegisterRequest,
} from "../models/User";
import { IRestService } from "./restService";

export interface IUserService {
  signIn(requestBody: UserLoginRequest): Promise<AuthTokenResponse | null>;
  signUp(requestBody: UserRegisterRequest): Promise<void | null>;
  sigOut(): void;
}

export class UserService implements IUserService {
  constructor(private readonly restService: IRestService) {}

  async signIn(
    requestBody: UserLoginRequest,
  ): Promise<AuthTokenResponse | null> {
    try {
      const url = "/auth/login";

      const tokenResponse = await this.restService.post<
        UserLoginRequest,
        AuthTokenResponse
      >(url, requestBody);
      if (tokenResponse) {
        return tokenResponse;
      } else {
        throw new Error("login failed");
      }
    } catch (error) {
      console.error(`Unable to login: ${error}`);
    }
    return null;
  }

  async signUp(requestBody: UserRegisterRequest): Promise<void | null> {
    try {
      const url = "/auth/register";

      return await this.restService.post<UserRegisterRequest, void>(
        url,
        requestBody,
      );
    } catch (error) {
      console.error(`Unable to sign up: ${error}`);
    }
  }

  sigOut(): void {
    console.log("logged out");
  }
}
