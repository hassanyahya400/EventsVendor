import { ReactNode, createContext, useContext } from "react";

import { IUserService, UserService } from "../services/userService";
import { RestService } from "../services/restService";
import { IEventService, EventService } from "../services/eventService";

export interface IInjectedServices {
	userService: IUserService;
	eventService: IEventService;
}

export const createServices = (): IInjectedServices => {
	// const API_BASE_URL = import.meta.env.API_BASE_URL;
	const API_BASE_URL = "https://localhost:7022/api";
	const webApiRestService = new RestService(API_BASE_URL);
	const webApiAuthorizedRestService = new RestService(API_BASE_URL);

	const userService = new UserService(webApiRestService);
	const eventService = new EventService(webApiRestService, webApiAuthorizedRestService);

	return {
		userService,
		eventService,
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
