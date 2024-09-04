using System;
using EventsVendor.Models;

namespace EventsVendor.API.DTOs.Wallet
{
	public class WalletTransactionDto
	{
        public decimal Amount { get; set; }

        public DateTime? TransactionDate { get; set; }

        public TransactionType Type { get; set; }
    }
}