using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using EventsVendor.Interfaces;
using EventsVendor.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EventsVendor.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class TicketsController : Controller
    {
        private readonly ITicketService _ticketService;

        public TicketsController(ITicketService ticketService)
        {
            _ticketService = ticketService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ticket>>> GetUserTickets()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var tickets = await _ticketService.GetTicketsByUserIdAsync(userId);
            if (tickets == null || !tickets.Any())
            {
                return NotFound("User not found or ticket does not exist for this user.");
            }
            return Ok(tickets);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Ticket>> GetTicket(int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var ticket = await _ticketService.GetTicketByIdAsync(id, userId);
            if (ticket == null)
            {
                return NotFound("Ticket not found or does not belong to this user.");
            }
            return Ok(ticket);
        }

        [HttpPost("book")]
        public async Task<ActionResult<Ticket>> BookTicket(int eventId)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var ticket = await _ticketService.BookTicketAsync(eventId, userId);
            if (ticket == null)
            {
                return BadRequest("Unable to book ticket. Insufficient balance, invalid event, or no tickets available.");
            }
            return CreatedAtAction(nameof(GetTicket), new { id = ticket.Id, userId = userId }, ticket);
        }

        [HttpPost("cancel/{id}")]
        public async Task<IActionResult> CancelTicket(int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var success = await _ticketService.CancelTicketAsync(id, userId);
            if (!success)
            {
                return BadRequest("Unable to cancel ticket. Either ticket does not exist, does not belong to this user, or is already cancelled.");
            }
            return NoContent();
        }
    }
}

