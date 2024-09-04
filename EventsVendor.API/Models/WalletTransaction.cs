﻿using System;
namespace EventsVendor.Models
{
    public class WalletTransaction
    {
        public int Id { get; set; }

        public string UserId { get; set; }

        public EventsVendorUser User { get; set; }

        public decimal Amount { get; set; }

        public DateTime TransactionDate { get; set; }

        public TransactionType Type { get; set; } // Enum to track transaction type

    }

    public enum TransactionType
    {
        Fund,   // Adding money to the wallet
        Debit,  // Deducting money (booking a ticket)
        Credit  // Refunding money (ticket cancellation)
    }
}