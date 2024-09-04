import Table from "../components/Table";
import tickets from "../data/tickets";

const Tickets = () => {
  return (
    <div>
      <Table
        columns={["eventName", "bookingdate", "eventDate", "status"]}
        data={tickets}
      />
    </div>
  );
};

export default Tickets;
