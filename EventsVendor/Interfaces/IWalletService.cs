using System;
namespace EventsVendor.Interfaces
{
	public interface IWalletService
	{
        Task<decimal> GetWalletBalanceAsync(int userId);

        Task<bool> FundWalletAsync(int userId, decimal amount);

        Task<bool> DebitWalletAsync(int userId, decimal amount);
    }
}

