using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using EventsVendor.API.DTOs.Wallet;
using EventsVendor.Interfaces;
using EventsVendor.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventsVendor.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class WalletController : Controller
    {
        private readonly IWalletService _walletService;

        public WalletController(IWalletService walletService)
        {
            _walletService = walletService;
        }

        [HttpGet("balance")]
        public async Task<ActionResult<decimal>> GetWalletBalance()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var balance = await _walletService.GetWalletBalanceAsync(userId);
            return Ok(balance);
        }

        //[HttpPost("transactions")]
        //public async Task<IActionResult> FundWallet(WalletTransactionDto transactionDto)
        //{
        //    var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        //    var success = false;

        //    switch (transactionDto.Type)
        //    {
        //        case TransactionType.Fund:
        //            success = await _walletService.FundWalletAsync(userId, transactionDto.Amount);
        //            break;

        //        case TransactionType.Debit:
        //            success = await _walletService.DebitWalletAsync(userId, transactionDto.Amount);
        //            break;

        //        case TransactionType.Credit:

        //            success = await _walletService.FundWalletAsync(userId, transactionDto.Amount);
        //            break;

        //        default:
        //            throw new ArgumentOutOfRangeException("Unknow uperation passed");
        //    }

        //    if (!success)
        //    {
        //        return BadRequest("Unable to fund wallet. User not found, invalid transaction type or invalid amount.");
        //    }

        //    return NoContent();
        //}

        [HttpPost("transactions")]
        public async Task<IActionResult> ProcessTransaction([FromBody] WalletTransactionDto transactionDto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            // Call service to process the transaction
            var success = await _walletService.ProcessWalletTransactionAsync(userId, transactionDto);

            if (!success)
            {
                return BadRequest("Transaction failed. Either insufficient balance or user not found.");
            }

            return Ok("Transaction successful.");
        }

        [HttpGet("transactions")]
        public async Task<ActionResult<IEnumerable<WalletTransaction>>> GetWalletTransactionHistory()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var transactions = await _walletService.GetWalletTransactionHistoryAsync(userId);
            if (transactions == null || !transactions.Any())
            {
                return NotFound("No transactions found for this user.");
            }
            return Ok(transactions);
        }
    }
}

