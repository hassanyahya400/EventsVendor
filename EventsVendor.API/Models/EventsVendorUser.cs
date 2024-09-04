using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace EventsVendor.Models
{
    public class EventsVendorUser : IdentityUser
    {
        
        public decimal WalletBalance { get; set; } // The user's wallet balance

        [JsonIgnore]
        public ICollection<WalletTransaction>? WalletTransactions { get; set; }

        [JsonIgnore]
        public ICollection<Ticket>? Tickets { get; set; }
    }

}