import { FaArrowRight, FaMoneyBills } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbClock } from "react-icons/tb";

interface Props {
  name: string;
  imageUrl: string;
  description: string;
  location: string;
  date: string;
  availableTicket: number;
  price: number;
}

const EventCard = ({
  name,
  imageUrl,
  description,
  location,
  date,
  availableTicket,
  price,
}: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-between group sm:max-w-sm border border-gray-300 rounded-lg overflow-hidden">
      <img src={imageUrl} loading="lazy" alt={name} className="w-full" />
      <div className="mt-3 space-y-2 px-3 py-2">
        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold pb-3">
          {name}
        </h3>

        <div className="flex justify-start gap-2 text-sm text-gray-600 duration-150 group-hover:text-gray-800">
          <MdDateRange /> <span>{date}</span>
        </div>
        <div className="flex justify-start gap-2">
          <TbClock />
          <span className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
            {date}
          </span>
        </div>
        <div className="flex justify-start gap-2">
          <IoLocationOutline />
          <span className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
            {location}
          </span>
        </div>
        <div className="flex justify-between border-t py-3 mt-3">
          <div className="text-3xl flex">
            <FaMoneyBills />
            <span className="px-2">{price}</span>
          </div>
          <div className="flex items-center">
            <p>Get ticket</p>
            <FaArrowRight className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
