import { BounceLoader } from "react-spinners";
import Table from "../components/Table";
import { useInjectedServices } from "../contexts/serviceDependency";
import { WalletTransaction } from "../models/Wallet";
import { useQuery } from "@tanstack/react-query";

const Wallet = () => {
	const { walletService } = useInjectedServices();

	const { data: walletBalance } = useQuery<number, Error>({
		queryKey: ["balance"],
		queryFn: async () => {
			return await walletService.getBalance();
		},
		staleTime: 60 * 60,
	});

	const {
		data: walletTransactions,
		isLoading,
		error,
	} = useQuery<WalletTransaction[], Error>({
		queryKey: ["walletTransactions"],
		queryFn: async () => {
			return await walletService.getWalletTransaction();
		},
		staleTime: 60 * 60,
	});

	if (isLoading) return <BounceLoader loading={true} size={25} />;

	if (error) return <div>An error occured</div>;

	if (!walletTransactions || walletTransactions.length === 0) {
		return <div>No ticket found</div>;
	}
	return (
		<div>
			<div className="items-start justify-between md:flex">
				<div className="max-w-lg mt-2">
					<h3 className="text-gray-800 text-3xl font-bold ">₦ {walletBalance}</h3>
				</div>
			</div>
			<Table columns={["transactionDate", "amount", "type"]} data={walletTransactions} />
		</div>
	);
};

export default Wallet;
