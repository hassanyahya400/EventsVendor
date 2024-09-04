import { ReactNode, createContext } from "react";

import { IUserService, UserService } from "../services/userService";
import { RestService } from "../services/restService";

export interface IInjectedServices {
  userService: IUserService;
}

export const createServices = (): IInjectedServices => {
  const webApiRestService = new RestService("https://localhost:7022");

  const userService = new UserService(webApiRestService);
  return {
    userService,
  };
};

interface Props {
  children: ReactNode;
  services: IInjectedServices;
}

export const ServiceDependency = createContext({} as IInjectedServices);

export const ServicesProvider: React.FC<Props> = ({ children, services }) => {
  return (
    <ServiceDependency.Provider value={services}>
      {children}
    </ServiceDependency.Provider>
  );
};
