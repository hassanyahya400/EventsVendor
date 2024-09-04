using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace EventsVendor.Models
{
	public class Event
	{
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }

        public string? Description { get; set; }

        public string? ImageUrl { get; set; }

        public string? Location { get; set; }

        public DateTime Date { get; set; }

        public int AvailableTickets { get; set; }

        public decimal Price { get; set; }

        [JsonIgnore]
        public ICollection<Ticket>? Tickets { get; set; }
    }
}