using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace EventsVendor.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string? Username { get; set; }

        public string? PasswordHash { get; set; }

        [Required]
        public string? Email { get; set; }

        public decimal WalletBalance { get; set; } // The user's wallet balance

        [JsonIgnore]
        public ICollection<WalletTransaction>? WalletTransactions { get; set; }

        [JsonIgnore]
        public ICollection<Ticket>? Tickets { get; set; }
    }

}