export interface WalletTransaction {
	amount: number;
	transactionDate: string;
	type: transactionType;
}

export enum transactionType {
	Debit = 0,
	Fund = 1,
	Credit = 2,
}
