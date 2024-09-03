import events from "../data/events";
import EventCard from "./EventCard";
const EventsListGrid = () => {
  return (
    <section>
      <h3 className="text-3xl text-gray-500 font-extrabold md:text-4xl py-5">
        Popular Events In Your Location
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            name={event.name}
            imageUrl={event.imageUrl}
            description={event.description}
            location={event.location}
            date={event.date}
            availableTicket={event.availableTicket}
            price={event.price}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsListGrid;
