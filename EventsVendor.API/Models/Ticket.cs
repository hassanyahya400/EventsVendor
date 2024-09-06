using System;
using System.Text.Json.Serialization;

namespace EventsVendor.Models
{
    public class Ticket
    {
        public int Id { get; set; }

        public int EventId { get; set; }

        [JsonIgnore]
        public Event Event { get; set; }

        public string UserId { get; set; }

        [JsonIgnore]
        public EventsVendorUser User { get; set; }

        public DateTime BookingDate { get; set; }

        public TicketStatus Status { get; set; }

       
    }

    public enum TicketStatus
    {
        Booked,
        Cancelled,
    }   
}