import { useQuery } from "@tanstack/react-query";
import PagePreloader from "../components/PagePreloader";
import Table from "../components/Table";
import { useInjectedServices } from "../contexts/serviceDependency";
import { WalletTransaction } from "../models/Wallet";
import { ClipLoader } from "react-spinners";

const Wallet = () => {
	const { walletService } = useInjectedServices();

	const {
		data: walletBalance,
		isLoading: isBalanceLoading,
		error: balanceError,
	} = useQuery<number, Error>({
		queryKey: ["balance"],
		queryFn: async () => {
			return await walletService.getBalance();
		},
		staleTime: 60 * 60,
	});

	const {
		data: walletTransactions,
		isLoading: isTransactionsLoading,
		error: walletTransactionError,
	} = useQuery<WalletTransaction[], Error>({
		queryKey: ["walletTransactions"],
		queryFn: async () => {
			return await walletService.getWalletTransaction();
		},
		staleTime: 60 * 60,
	});
	return (
		<div>
			<div className="items-start justify-between md:flex">
				<div className="max-w-lg mt-2 flex items-baseline">
					₦
					{isBalanceLoading ? (
						<ClipLoader loading={isBalanceLoading} size={15} />
					) : balanceError ? (
						<div>An error occured, {balanceError.message}</div>
					) : (
						<h3 className="text-gray-800 text-3xl font-bold "> {walletBalance}</h3>
					)}
				</div>
			</div>
			{isTransactionsLoading ? (
				<PagePreloader />
			) : !walletTransactions ? (
				<div>No transaction found</div>
			) : walletTransactions.length === 0 ? (
				<div>No transaction found</div>
			) : walletTransactionError ? (
				<div>An error occured, {walletTransactionError.message}</div>
			) : (
				<Table columns={["transactionDate", "amount", "type"]} data={walletTransactions} />
			)}
		</div>
	);
};

export default Wallet;
