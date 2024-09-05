import { IRestService } from "./restService";

import { WalletTransaction } from "../models/Wallet";

export interface IWalletService {
	getWalletTransaction(): Promise<WalletTransaction[]>;

	getBalance(): Promise<number>;
}

export class WalletService implements IWalletService {
	constructor(
		private readonly restService: IRestService,
		private readonly authorizedRestService: IRestService,
	) {}

	async getWalletTransaction(): Promise<WalletTransaction[]> {
		try {
			const url = "/wallet/transactions";
			const walletTransactionResponse = await this.authorizedRestService.get<WalletTransaction[]>(
				url,
			);
			return walletTransactionResponse;
		} catch (error) {
			console.error(`Unable to fetch wallet transactions`);
			throw error;
		}
	}

	async getBalance(): Promise<number> {
		try {
			const url = "/wallet/balance";
			return await this.authorizedRestService.get<number>(url);
		} catch (error) {
			console.error(`Unable to change delete: ${error}`);
		}

		return 0;
	}
}
