import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbClock } from "react-icons/tb";

const EventDetails = () => {
  return (
    <div className="my-4">
      <img src="https://cdn.filestackcontent.com/7Y3LHNSkq3bylR23hGNQ" />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-y-10 content-between my-3">
        <div>
          <div>
            <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold pb-3">
              Event Name
            </h3>
            <p>
              Desription Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Quos unde ipsa, dignissimos eius beatae ex obcaecati sequi
              corporis fugiat ipsam odit ratione aut nesciunt accusamus, quo
              enim explicabo. Perferendis, odit voluptates! Quibusdam eveniet
              ullam, at minima molestiae error placeat ipsam hic odit, maiores
              illum eum! Repellat laborum debitis eligendi delectus.
            </p>
          </div>
          <div>
            <h3>Event Info</h3>
            <div className="flex justify-start gap-2 text-sm text-gray-600 duration-150 group-hover:text-gray-800">
              <MdDateRange /> <span>"date"</span>
            </div>
            <div className="flex justify-start gap-2">
              <TbClock />
              <span className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                "date"
              </span>
            </div>
            <div className="flex justify-start gap-2">
              <IoLocationOutline />
              <span className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                "location"
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Share event</div>
          <p>Price: $500</p>
          <a
            href="javascript:void(0)"
            className=" max-w-36 py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline"
            
          >
            Book ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
