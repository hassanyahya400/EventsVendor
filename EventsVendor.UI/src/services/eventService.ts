import { Event } from "../models/Event";
import { IRestService } from "./restService";

export interface IEventService {
  getEvents(): Promise<Event[]>;
  getEvent(id: number | undefined): Promise<Event>;
}

export class EventService implements IEventService {
  constructor(
    private readonly restService: IRestService,
    private readonly authorizedRestService: IRestService,
  ) {}

  async getEvents(): Promise<Event[]> {
    try {
      const url = "/events";
      const eventsResponse = await this.restService.get<Event[]>(url);

      return eventsResponse;
    } catch (error) {
      throw error;
    }
  }

  async getEvent(id: number): Promise<Event> {
    try {
      const url = `/events/${id}`;

      const eventResponse = await this.restService.get<Event>(url);

      return eventResponse;
    } catch (error) {
      throw error;
    }
  }
}
