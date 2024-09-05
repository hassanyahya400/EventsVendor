import { ReactNode, createContext, useContext } from "react";

import { IUserService, UserService } from "../services/userService";
import { RestService } from "../services/restService";
import { IEventService, EventService } from "../services/eventService";
import { ITicketService, TicketService } from "../services/ticketService";
import { AuthorizedRestService } from "../services/authorizedRestService";
import { IWalletService, WalletService } from "../services/walletService";

export interface IInjectedServices {
	userService: IUserService;
	eventService: IEventService;
	ticketService: ITicketService;
	walletService: IWalletService;
}

export const createServices = (): IInjectedServices => {
	// const API_BASE_URL = import.meta.env.API_BASE_URL;
	const API_BASE_URL = "https://localhost:7022/api";
	const webApiRestService = new RestService(API_BASE_URL);
	const webApiAuthorizedRestService = new AuthorizedRestService(API_BASE_URL);

	const userService = new UserService(webApiRestService);
	const eventService = new EventService(webApiRestService, webApiAuthorizedRestService);
	const ticketService = new TicketService(webApiRestService, webApiAuthorizedRestService);
	const walletService = new WalletService(webApiRestService, webApiAuthorizedRestService);

	return {
		userService,
		eventService,
		ticketService,
		walletService,
	};
};

interface Props {
	children: ReactNode;
	services: IInjectedServices;
}

export const ServiceDependency = createContext({} as IInjectedServices);

export const ServicesProvider: React.FC<Props> = ({ children, services }) => {
	return <ServiceDependency.Provider value={services}>{children}</ServiceDependency.Provider>;
};

export const useInjectedServices = () => useContext(ServiceDependency);
