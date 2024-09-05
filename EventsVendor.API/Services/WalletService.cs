using System;
using EventsVendor.API.DTOs.Wallet;
using EventsVendor.Interfaces;
using EventsVendor.Models;
using Microsoft.EntityFrameworkCore;

namespace EventsVendor.Services
{
	public class WalletService : IWalletService	
	{
        private readonly EventsVendorDbContext _context;

        public WalletService(EventsVendorDbContext context)
        {
            _context = context;
        }

        public async Task<decimal> GetWalletBalanceAsync(string userId)
        {
            var user = await _context.Users.FindAsync(userId);
            return user?.WalletBalance ?? 0;
        }

        public async Task<bool> ProcessWalletTransactionAsync(string userId, WalletTransactionDto transactionDto)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user == null)
            {
                return false; // User not found
            }

            if (transactionDto.Type == TransactionType.Debit)
            {
                if (user.WalletBalance < transactionDto.Amount)
                {
                    return false; // Insufficient balance for debit
                }
                user.WalletBalance -= transactionDto.Amount;
            }
            else if (transactionDto.Type == TransactionType.Fund)
            {
                user.WalletBalance += transactionDto.Amount;
            }

            // Create the WalletTransaction record
            var walletTransaction = new WalletTransaction
            {
                UserId = userId,
                Amount = transactionDto.Amount,
                TransactionDate = transactionDto.TransactionDate ?? DateTime.Now,
                Type = transactionDto.Type
            };

            _context.WalletTransactions.Add(walletTransaction);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> FundWalletAsync(string userId, decimal amount)
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

        public async Task<bool> DebitWalletAsync(string userId, decimal amount)
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

        public async Task<IEnumerable<WalletTransaction>> GetWalletTransactionHistoryAsync(string userId)
        {
            Console.WriteLine(userId);
            return await _context.WalletTransactions
                .Where(wt => wt.UserId == userId)
                .OrderByDescending(wt => wt.TransactionDate) // Most recent transactions first
                .ToListAsync();
        }
    }
}

