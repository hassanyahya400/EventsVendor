import { Link } from "react-router-dom";
import events from "../data/events";
import EventCard from "./EventCard";
interface Props {
  limit?: number;
}
const EventsListGrid = ({ limit }: Props) => {
  let eventsToRender = [...events];
  if (limit) eventsToRender = [...events].slice(limit);
  return (
    <section>
      <h3 className="text-3xl text-gray-500 font-extrabold md:text-4xl py-5">
        Popular Events In Your Location
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 content-between my-3">
        {eventsToRender.map((event) => (
          <Link key={event.id} to={`/events/${event.id}`}>
            <EventCard
              name={event.name}
              imageUrl={event.imageUrl}
              description={event.description}
              location={event.location}
              date={event.date}
              availableTicket={event.availableTicket}
              price={event.price}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EventsListGrid;
