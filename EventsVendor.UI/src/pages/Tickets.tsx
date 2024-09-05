import { useQuery } from "@tanstack/react-query";
import Table from "../components/Table";
import { useInjectedServices } from "../contexts/serviceDependency";
import { Ticket } from "../models/Ticket";
import { BounceLoader } from "react-spinners";

// import tickets from "../data/tickets";

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
			<Table columns={["id", "eventId", "bookingDate", "status"]} data={tickets} variant="ticket" />
		</div>
	);
};

export default Tickets;
