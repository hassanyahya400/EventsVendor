import { UserSignInRequest } from "../models/requests/signInRequest";
import { UserSignUpRequest } from "../models/requests/signUpRequest";
import { UserToken } from "../models/responses/userToken";
import { IRestService } from "./restService";

export interface IUserService {
  signIn(requestBody: UserSignInRequest): Promise<UserToken | null>;
  signUp(requestBody: UserSignUpRequest): Promise<void | null>;
  sigOut(): void;
}

export class UserService implements IUserService {
  constructor(private readonly restService: IRestService) {}

  async signIn(requestBody: UserSignInRequest): Promise<UserToken | null> {
    try {
      const url = "/login";

      const tokenResponse = await this.restService.post<
        UserSignInRequest,
        UserToken
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

  async signUp(requestBody: UserSignUpRequest): Promise<void | null> {
    try {
      const url = "/register";

      return await this.restService.post<UserSignUpRequest, void>(
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
