export interface WalletTransaction {
	amount: number;
	transactionDate: string;
	type: transactionType;
}

export enum transactionType {
	Credit = 0,
	Debit = 1,
}
