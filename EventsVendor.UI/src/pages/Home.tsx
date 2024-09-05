import EventsListGrid from "../components/EventsListGrid";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { useUserStore } from "../state-management/userStore";

interface Props {}

const Home = () => {
	const { user } = useUserStore();

	return (
		<div>
			<Hero />
			<EventsListGrid limit={8} />
			<Footer />
		</div>
	);
};

export default Home;