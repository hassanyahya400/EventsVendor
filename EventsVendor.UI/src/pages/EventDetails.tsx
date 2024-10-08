import { useMutation, useQuery } from "@tanstack/react-query";
import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbClock } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ExpandableText from "../components/ExpandableText";
import PagePreloader from "../components/PagePreloader";
import { useInjectedServices } from "../contexts/serviceDependency";
import { extractIdFromPath } from "../helpers/urlHelpers";

const EventDetails = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const id = extractIdFromPath(location.pathname);

	if (id == null) return <div>Event not found</div>;

	const { eventService, ticketService } = useInjectedServices();
	const {
		data: event,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["events", id],
		queryFn: async () => {
			return await eventService.getEvent(id);
		},
		staleTime: 60 * 60 * 24,
	});

	const { mutate: bookTicket, isPending } = useMutation({
		mutationFn: async (id: number) => await ticketService.bookEventTicket(id),
		onSuccess: (data) => {
			navigate("/events/tickets");
			alert(`Ticket booked successfully for event ${data?.eventId}`);
			console.log("Ticket booked successfully", data);
		},
		onError: (error) => {
			alert(`Error booking ticket ${error.message}`);
			console.error("Error booking ticket", error);
		},
	});

	if (isLoading) return <PagePreloader />;

	if (error) return <div>Error: {error.message}</div>;

	if (!event) {
		return <div>Event not found</div>;
	}
	return (
		<div className="my-4">
			<img src={event.imageUrl} />
			<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 content-between my-3">
				<div>
					<div>
						<h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold pb-3">
							{event.name}
						</h3>
						<ExpandableText>{event.description}</ExpandableText>
					</div>
					<div className=" flex flex-col gap-2">
						<h3 className="font-medium text-xl my-2">Event Info</h3>
						<div className="flex justify-start items-center gap-2 text-gray-600 duration-150 group-hover:text-gray-800">
							<MdDateRange /> <span>{event.date}</span>
						</div>
						<div className="flex justify-start items-center gap-2">
							<TbClock />
							<span className="text-gray-600 duration-150 group-hover:text-gray-800">
								{event.date}
							</span>
						</div>
						<div className="flex justify-start items-center gap-2">
							<IoLocationOutline />
							<span className="text-gray-600 duration-150 group-hover:text-gray-800">
								{event.location}
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2 max-w-md items-start">
					<p className="font-medium">
						Price: <span className="text-3xl">₦ {event.price}</span>
					</p>
					<Button text="Book ticket" onClick={() => bookTicket(id)} isLoading={isPending} />
				</div>
			</div>
		</div>
	);
};

export default EventDetails;
