import { useState } from "react";

const NavBar = () => {
  const [state, setState] = useState(true);

  const navigation = [
    { title: "Find Events", path: "#" },
    { title: "About", path: "#" },
    { title: "Tickets", path: "/events/tickets" },
    { title: "Wallet", path: "/wallet-ballance" },
  ];

  return (
    <nav className="relative items-center pt-5 px-4 mx-auto sm:px-8 md:flex md:space-x-6">
    <div className="flex justify-between">
        <a href="javascript:void(0)">
            <img
                src="https://www.floatui.com/logo.svg"
                width={120}
                height={50}
                alt="Float UI logo"
            />
        </a>
        <button className="text-gray-500 outline-none md:hidden"
            onClick={() => setState(!state)}
        >
            {
                state ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )
            }
        </button>
    </div>
    <ul className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${state ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'}`}>
        <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
            {
                navigation.map((item, idx) => (
                    <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                        <a href={item.path}>{item.title}</a>
                    </li>
                ))
            }
        </div>
        <li className="order-2 py-5 md:py-0">
            <a href="javascript:void(0)" className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline">
                Get started
            </a>
        </li>
    </ul>
</nav>
  );
};

export default NavBar;
