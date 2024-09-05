import { Event } from "../models/Event";
import { IRestService } from "./restService";

export interface ITicketService {
  getEvents(): Promise<Event[] | null>;
  getEvent(id: number | undefined): Promise<Event | null>;
}

export class TicketService implements ITicketService {
  constructor(
    private readonly restService: IRestService,
    private readonly authorizedRestService: IRestService,
  ) {}

  async getEvents(): Promise<Event[] | null> {
    try {
      const url = "/events";
      const eventsResponse = await this.restService.get<Event[] | null>(url);

      return eventsResponse;
    } catch (error) {
      console.error(`Unable to export CSV: ${error}`);
    }
    return null;
  }

  async getEvent(id: number): Promise<Event | null> {
    try {
      const url = `/events/${id}`;

      const eventResponse = await this.restService.get<Event | null>(url);

      return eventResponse;
    } catch (error) {
      console.error(`unable to get hospital: ${error}`);
    }
    return null;
  }
}
