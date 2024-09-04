import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import EventsListing from "../pages/Events";
import EventDetails from "../pages/EventDetails";
import Tickets from "../pages/Tickets";
import Wallet from "../pages/Wallet";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />} />
        <Route path="events" element={<EventsListing />} />
        <Route path="events/:id" element={<EventDetails />} />
        <Route path="events/book-ticket" element={<p>Book event ticket</p>} />
        <Route path="events/tickets" element={<Tickets />} />
        <Route path="/wallet" element={<Wallet />} />
      </Route>
      ,
    </>,
  ),
);

export default router;
