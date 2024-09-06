import EventsListGrid from "../components/EventsListGrid";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
	return (
		<div>
			<Hero />
			<EventsListGrid limit={8} />
			<Footer />
		</div>
	);
};

export default Home;
