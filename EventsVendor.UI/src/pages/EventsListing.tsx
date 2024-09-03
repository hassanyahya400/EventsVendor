import EventsListGrid from "../components/EventsListGrid";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

interface Props {}

const EventsListing = () => {
  return (
    <div>
      <Hero />
      <EventsListGrid />
      <Footer />
    </div>
  );
};

export default EventsListing;
