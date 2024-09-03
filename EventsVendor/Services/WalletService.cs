using System;
using EventsVendor.Interfaces;
using EventsVendor.Models;

namespace EventsVendor.Services
{
	public class WalletService : IWalletService	
	{
        private readonly EventsVendorDbContext _context;

        public WalletService(EventsVendorDbContext context)
        {
            _context = context;
        }

        public async Task<decimal> GetWalletBalanceAsync(int userId)
        {
            var user = await _context.Users.FindAsync(userId);
            return user?.WalletBalance ?? 0;
        }

        public async Task<bool> FundWalletAsync(int userId, decimal amount)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user == null || amount <= 0)
            {
                return false; // User not found or invalid amount
            }

            user.WalletBalance += amount;

            // Record the transaction
            var transaction = new WalletTransaction
            {
                UserId = userId,
                Amount = amount,
                TransactionDate = DateTime.Now,
                Type = TransactionType.Fund
            };

            _context.WalletTransactions.Add(transaction);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DebitWalletAsync(int userId, decimal amount)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user == null || amount <= 0 || user.WalletBalance < amount)
            {
                return false; // User not found, invalid amount, or insufficient balance
            }

            user.WalletBalance -= amount;

            // Record the transaction
            var transaction = new WalletTransaction
            {
                UserId = userId,
                Amount = amount,
                TransactionDate = DateTime.Now,
                Type = TransactionType.Debit
            };

            _context.WalletTransactions.Add(transaction);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}

