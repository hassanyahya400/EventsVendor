import { AxiosHeaders, AxiosRequestHeaders } from "axios";
import { jwtDecode } from "jwt-decode";
import { useUserStore } from "../state-management/userStore";
import { RestService } from "./restService";

export class AuthorizedRestService extends RestService {
	constructor(url: string) {
		super(url);
	}

	async get<TResponse>(
		endpoint: string,
		additionalHeaders?: AxiosRequestHeaders,
	): Promise<TResponse> {
		try {
			const authorizationHeaderToken = await this.getAuthorizationHeaderToken();
			additionalHeaders = this.getDefaultHeaders(authorizationHeaderToken, additionalHeaders);
			return await super.get(endpoint, additionalHeaders);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async post<TResponse, TData>(
		endpoint: string,
		data: TData,
		additionalHeaders?: AxiosRequestHeaders,
	): Promise<TResponse> {
		try {
			const authorizationHeaderToken = await this.getAuthorizationHeaderToken();

			additionalHeaders = this.getDefaultHeaders(authorizationHeaderToken, additionalHeaders);

			return await super.post(endpoint, data, additionalHeaders);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async put<TResponse, TData>(
		endpoint: string,
		data: TData,
		additionalHeaders?: AxiosRequestHeaders,
	): Promise<TResponse> {
		try {
			const authorizationHeaderToken = await this.getAuthorizationHeaderToken();

			additionalHeaders = this.getDefaultHeaders(authorizationHeaderToken, additionalHeaders);

			return await super.put(endpoint, data, additionalHeaders);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async delete(endpoint: string, additionalHeaders?: AxiosRequestHeaders): Promise<void> {
		try {
			const authorizationHeaderToken = await this.getAuthorizationHeaderToken();

			additionalHeaders = this.getDefaultHeaders(authorizationHeaderToken, additionalHeaders);

			return await super.delete(endpoint, additionalHeaders);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	private getDefaultHeaders(
		authorizationHeaderToken: string | null,
		additionalHeaders?: AxiosRequestHeaders,
	): AxiosRequestHeaders {
		additionalHeaders ??= new AxiosHeaders();

		additionalHeaders.Authorization = authorizationHeaderToken;
		additionalHeaders.Accept = "application/json";

		return additionalHeaders;
	}

	private async getAuthorizationHeaderToken(): Promise<string | null> {
		const token = await this.getAccessToken();
		console.log(token);
		
		if (!token) {
			return null;
		}

		return "Bearer " + token;
	}

	private async getAccessToken(): Promise<string | null> {
		const { user, clearUser } = useUserStore.getState();
		console.log(user);

		const token = user?.token;
		if (!token) {
			return null;
		}

		if (await this.isTokenExpired(token)) {
			console.log("user token expired");
			clearUser();
		}

		return token;
	}

	private async isTokenExpired(token: string): Promise<boolean> {
		try {
			const decodedToken = (await jwtDecode(token)) as any;
			const currentTime = Date.now() / 1000;
			return decodedToken.exp < currentTime;
		} catch (error) {
			console.error("Error decoding JWT token:", error);
			return true;
		}
	}
}
