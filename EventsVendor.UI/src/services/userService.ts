import { AuthTokenResponse, UserLoginRequest, UserRegisterRequest } from "../models/User";
import { IRestService } from "./restService";

export interface IUserService {
	login(requestBody: UserLoginRequest): Promise<AuthTokenResponse | null>;
	register(requestBody: UserRegisterRequest): Promise<void | null>;
	logout(): void;
}

export class UserService implements IUserService {
	constructor(private readonly restService: IRestService) {}

	async login(requestBody: UserLoginRequest): Promise<AuthTokenResponse | null> {
		try {
			const url = "/auth/login";

			const tokenResponse = await this.restService.post<UserLoginRequest, AuthTokenResponse>(
				url,
				requestBody,
			);
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

	async register(requestBody: UserRegisterRequest): Promise<void | null> {
		try {
			const url = "/auth/register";

			return await this.restService.post<UserRegisterRequest, void>(url, requestBody);
		} catch (error) {
			console.error(`Unable to sign up: ${error}`);
		}
	}

	logout(): void {
		console.log("logged out");
	}
}
