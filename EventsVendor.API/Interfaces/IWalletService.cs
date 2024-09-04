using System;
using EventsVendor.Models;

namespace EventsVendor.Interfaces
{
	public interface IWalletService
	{
        Task<decimal> GetWalletBalanceAsync(string userId);

        Task<bool> FundWalletAsync(string userId, decimal amount);

        Task<bool> DebitWalletAsync(string userId, decimal amount);

        Task<IEnumerable<WalletTransaction>> GetWalletTransactionHistoryAsync(string userId);
    }
}

