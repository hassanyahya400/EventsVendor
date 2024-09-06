import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { useInjectedServices } from "../contexts/serviceDependency";
import { ClipLoader } from "react-spinners";

interface Props<T> {
	columns: (keyof T)[];
	data: T[];
	variant?: string;
	rowAction?: RowAction;
}
interface RowAction {
	name: string;
	columnIdx: string | number;
	component: FC | any;
}

{
	/* <rowAction.component /> */
}

const Table = <T,>({ columns, data, variant, rowAction }: Props<T>) => {
	const { ticketService } = useInjectedServices();

	const { mutate: cancelTicket, isPending } = useMutation({
		mutationFn: async (id: number) => await ticketService.cancelTicket(id),
		onSuccess: (data) => {
			alert("Ticket cancelled successfully");
			console.log("Ticket cancelled successfully", data);
		},
		onError: (error) => {
			alert(`Error canceling ticket, ${error.message}`);
			console.error("Error canceling ticket", error);
		},
	});

	return (
		<div className="mt-8 shadow-sm border rounded-lg overflow-x-auto">
			<table className="w-full table-auto text-sm text-left">
				<thead className="bg-gray-50 text-gray-600 font-medium border-b">
					<tr>
						{columns.map((column) => (
							<th key={String(column)} className="py-3 px-6">
								{String(column)}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="text-gray-600 divide-y">
					{data.map((row, idx) => (
						<tr key={idx}>
							{columns.map((column) => (
								<td key={String(column)} className="px-6 py-4 whitespace-nowrap">
									{row[column] == 0 ? (
										<span className="text-red-400">{String(row[column])}</span>
									) : row[column] == 1 ? (
										<span className="text-green-400">{String(row[column])}</span>
									) : row[column] == 2 ? (
										<span className="text-green-400">{String(row[column])}</span>
									) : (
										String(row[column])
									)}
								</td>
							))}
							{variant == "ticket" && row[columns[3]] ? (
								<td className="text-right px-6 whitespace-nowrap">
									<button
										onClick={() => cancelTicket(Number(row[columns[0]]))}
										className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
									>
										{isPending ? <ClipLoader loading={isPending} size={15} /> : "Cancel"}
									</button>
								</td>
							) : (
								""
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
