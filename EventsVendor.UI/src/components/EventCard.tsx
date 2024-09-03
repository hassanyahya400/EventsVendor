import { FaMoneyBills } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  location: string;
  date: string;
  availableTicket: number;
  price: number;
}

const EventCard = ({
  id,
  name,
  imageUrl,
  description,
  location,
  date,
  availableTicket,
  price,
}: Props) => {
  return (
    <div className="w-full mx-auto group sm:max-w-sm border border-gray-300 rounded-lg overflow-hidden">
      <Link to={`events/${id}`}>
        <img src={imageUrl} loading="lazy" alt={name} className="w-full" />
        <div className="mt-3 space-y-2 px-3 py-2">
          <span className="block text-indigo-600 text-sm">{date}</span>
          <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
            {name}
          </h3>
          <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
            {date}
          </p>
          <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
            {location}
          </p>

          <div className="flex justify-between border-t py-3">
            <div className="text-3xl flex">
              <FaMoneyBills />
              <span className="px-2">{price}</span>
            </div>
            <p>Get ticket</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
