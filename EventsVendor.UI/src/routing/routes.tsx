import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import EventsListing from "../pages/EventsListing";
import Layout from "../pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index={true} path="events" element={<EventsListing />} />
      <Route path="events/tickets" element={<p>Ticket list</p>} />
      <Route path="events/book-ticket" element={<p>Book event ticket</p>} />
      <Route
        path="/wallet-ballance"
        element={<p>Wallet balance and transactions</p>}
      />
    </Route>,
  ),
);

export default router;
