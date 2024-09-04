using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventsVendor.Interfaces;
using EventsVendor.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EventsVendor.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WalletController : Controller
    {
        private readonly IWalletService _walletService;

        public WalletController(IWalletService walletService)
        {
            _walletService = walletService;
        }

        [HttpGet("balance/{userId}")]
        public async Task<ActionResult<decimal>> GetWalletBalance(int userId)
        {
            var balance = await _walletService.GetWalletBalanceAsync(userId);
            return Ok(balance);
        }

        [HttpPost("fund")]
        public async Task<IActionResult> FundWallet(int userId, decimal amount)
        {
            var success = await _walletService.FundWalletAsync(userId, amount);
            if (!success)
            {
                return BadRequest("Unable to fund wallet. User not found or invalid amount.");
            }
            return NoContent();
        }

        [HttpPost("debit")]
        public async Task<IActionResult> DebitWallet(int userId, decimal amount)
        {
            var success = await _walletService.DebitWalletAsync(userId, amount);
            if (!success)
            {
                return BadRequest("Unable to debit wallet. User not found, invalid amount, or insufficient balance.");
            }
            return NoContent();
        }

        [HttpGet("transactions/{userId}")]
        public async Task<ActionResult<IEnumerable<WalletTransaction>>> GetWalletTransactionHistory(int userId)
        {
            var transactions = await _walletService.GetWalletTransactionHistoryAsync(userId);
            if (transactions == null || !transactions.Any())
            {
                return NotFound("No transactions found for this user.");
            }
            return Ok(transactions);
        }
    }
}

