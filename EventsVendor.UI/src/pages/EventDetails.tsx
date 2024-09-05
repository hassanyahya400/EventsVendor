import { useQuery } from "@tanstack/react-query";
import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbClock } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { useInjectedServices } from "../contexts/serviceDependency";
import { extractIdFromPath } from "../helpers/urlHelpers";

const EventDetails = () => {
	const location = useLocation();
	const id = extractIdFromPath(location.pathname);

	if (id == null) return <div>Event not found</div>;

	const { eventService } = useInjectedServices();
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

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error: {error.message}</div>;

	if (!event) {
		return <div>No events found</div>;
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
						<p>{event.description}</p>
					</div>
					<div>
						<h3>Event Info</h3>
						<div className="flex justify-start gap-2 text-sm text-gray-600 duration-150 group-hover:text-gray-800">
							<MdDateRange /> <span>{event.date}</span>
						</div>
						<div className="flex justify-start gap-2">
							<TbClock />
							<span className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
								{event.date}
							</span>
						</div>
						<div className="flex justify-start gap-2">
							<IoLocationOutline />
							<span className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
								{event.location}
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div>Share event</div>
					<p>Price: ${event.price}</p>
					<a
						href="javascript:void(0)"
						className=" max-w-36 py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline"
					>
						Book ticket
					</a>
				</div>
			</div>
		</div>
	);
};

export default EventDetails;
