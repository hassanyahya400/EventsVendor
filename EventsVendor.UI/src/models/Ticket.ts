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
  status: 0 | 1;
}