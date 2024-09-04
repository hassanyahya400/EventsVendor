using EventsVendor.Models;

namespace EventsVendor.Services
{
    public class GetTicketDto
    {
        public int Id { get; set; }

        public int EventId { get; set; }

        public string EventName { get; set; }

        public DateTime BookingDate { get; set; }

        public TicketStatus Status { get; set; }
    }
}