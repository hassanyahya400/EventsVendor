import { useMutation, useQuery } from "@tanstack/react-query";
import Table from "../components/Table";
import { useInjectedServices } from "../contexts/serviceDependency";
import { Ticket } from "../models/Ticket";
import { BounceLoader } from "react-spinners";
import { FC } from "react";

// import tickets from "../data/tickets";

interface cancelButtonProps {
	ticketId: number;
}

const Tickets = () => {
	const { ticketService } = useInjectedServices();
	const {
		data: tickets,
		isLoading,
		error,
	} = useQuery<Ticket[], Error>({
		queryKey: ["tickets"],
		queryFn: async () => {
			return await ticketService.getTickets();
		},
		staleTime: 60 * 60,
	});

	if (isLoading) return <BounceLoader loading={true} size={25} />;

	if (error) return <div>An error occured</div>;

	if (!tickets || tickets.length === 0) {
		return <div>No ticket found</div>;
	}

	return (
		<div>
			<Table
				columns={["id", "eventId", "bookingDate", "status"]}
				data={tickets}
				variant="ticket"
				rowAction={{ name: "cancel", columnIdx: 0, component: cancelButton }}
			/>
		</div>
	);
};

const cancelButton: FC<cancelButtonProps> = ({ ticketId }: cancelButtonProps) => {
	const { ticketService } = useInjectedServices();

	const { mutate: cancelTicket } = useMutation({
		mutationFn: async (id: number) => await ticketService.cancelTicket(id),
		onSuccess: (data) => {
			alert("Ticket cancelled successfully");
			console.log("Ticket cancelled successfully", data);
		},
		onError: (error) => {
			alert(`Error canceling ticket ${error.message}`);
			console.error("Error canceling ticket", error);
		},
	});

	return (
		<td className="text-right px-6 whitespace-nowrap">
			<button
				onClick={() => cancelTicket(ticketId)}
				className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
			>
				Cancel
			</button>
		</td>
	);
};

export default Tickets;
