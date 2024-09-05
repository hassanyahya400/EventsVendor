import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navigation from "../data/navigationLinks";
import BrandLogo from "./BrandLogo";

const NavBar = () => {
  const [state, setState] = useState(true);

  return (
    <nav className="relative items-between pt-5 md:flex md:space-x-6">
      <div className="flex justify-between">
        <Link to="/">
          <BrandLogo />
        </Link>
        <button
          className="text-gray-500 outline-none md:hidden"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${
          state
            ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static"
            : "hidden"
        }`}
      >
        <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
          {navigation.map((item, idx) => (
            <li className="text-gray-500 hover:text-indigo-600" key={idx}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
        </div>
        <li className="order-2 py-5 md:py-0">
          <a
            href="javascript:void(0)"
            className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
