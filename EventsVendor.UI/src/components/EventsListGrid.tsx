import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useInjectedServices } from "../contexts/serviceDependency";
import { Event } from "../models/Event";
import EventCard from "./EventCard";
import PagePreloader from "./PagePreloader";

interface Props {
	limit?: number;
}
const EventsListGrid = ({ limit }: Props) => {
	const { eventService } = useInjectedServices();
	const {
		data: events,
		isLoading,
		error,
	} = useQuery<Event[], Error>({
		queryKey: ["events"],
		queryFn: async () => {
			return await eventService.getEvents();
		},
		// initialData: initialEventsData,
		staleTime: 60 * 60 * 24,
	});

	if (isLoading) return <PagePreloader />;

	if (error) return <div>Error: {error.message}</div>;

	if (!events || events.length === 0) {
		return <div>No events found</div>;
	}

	return (
		<section>
			<h3 className="text-3xl text-gray-500 font-extrabold md:text-4xl py-5">
				Popular Events In Your Location
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 content-between place-items-stretch my-3">
				{events.map((event: Event) => (
					<Link key={event.id} to={`/events/${event.id}`}>
						<EventCard
							name={event.name}
							imageUrl={event.imageUrl}
							description={event.description}
							location={event.location}
							date={event.date}
							availableTicket={event.availableTickets}
							price={event.price}
						/>
					</Link>
				))}
			</div>
		</section>
	);
};

export default EventsListGrid;
