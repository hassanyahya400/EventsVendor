import { IRestService } from "./restService";

import { BookTicketResponse, Ticket } from "../models/Ticket";

export interface ITicketService {
	getTickets(): Promise<Ticket[]>;

	bookEventTicket(eventId: number | null): Promise<BookTicketResponse | null>;

	cancelTicket(ticketId: number): Promise<void>;
}

export class TicketService implements ITicketService {
	constructor(
		private readonly restService: IRestService,
		private readonly authorizedRestService: IRestService,
	) {}

	async getTickets(): Promise<Ticket[]> {
		try {
			const url = "/tickets";
			const ticketsResponse = await this.authorizedRestService.get<Ticket[]>(url);
			return ticketsResponse;
		} catch (error) {
			console.error(`Unable to fetch tickets`);
			throw error;
		}
	}

	async bookEventTicket(eventId: number): Promise<BookTicketResponse | null> {
		try {
			const url = `/tickets/book?eventId=${eventId}`;
			const newTicketResponse = await this.authorizedRestService.post<null, BookTicketResponse>(
				url,
				null,
			);
			return newTicketResponse;
		} catch (error) {
			console.error(`Unable to create a hospital: ${error}`);
		}
		return null;
	}

	async cancelTicket(ticketId: number): Promise<void> {
		try {
			const url = `/tickets/${ticketId}`;
			return await this.authorizedRestService.delete(url);
		} catch (error) {
			console.error(`Unable to change delete: ${error}`);
		}
	}
}
