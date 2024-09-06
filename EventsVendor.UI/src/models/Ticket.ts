export interface Ticket {
	id: number;
	eventId: number;
	userId: string;
	bookingDate: string;
	status: number;
}

export interface BookTicketResponse {
	id: number;
	eventId: number;
	userId: string;
	bookingDate: string;
	status: ticketStatus;
}

export enum ticketStatus {
	Cancelled = 0,
	Booked = 1,
}
