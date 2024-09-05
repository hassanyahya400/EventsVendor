using System;
using EventsVendor.API.DTOs.Wallet;
using EventsVendor.Models;

namespace EventsVendor.Interfaces
{
	public interface IWalletService
	{
        Task<decimal> GetWalletBalanceAsync(string userId);

        Task<bool> ProcessWalletTransactionAsync(string userId, WalletTransactionDto transactionDto);

        Task<bool> FundWalletAsync(string userId, decimal amount);

        Task<bool> DebitWalletAsync(string userId, decimal amount);

        Task<IEnumerable<WalletTransaction>> GetWalletTransactionHistoryAsync(string userId);
    }
}

