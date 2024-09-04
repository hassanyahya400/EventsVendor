using System;
using EventsVendor.Interfaces;
using EventsVendor.Models;
using Microsoft.EntityFrameworkCore;

namespace EventsVendor.Services
{
    public class TicketService : ITicketService
    {
        private readonly EventsVendorDbContext _context;
        private readonly IWalletService _walletService;

        public TicketService(EventsVendorDbContext context, IWalletService walletService)
        {
            _context = context;
            _walletService = walletService;
        }

        public async Task<IEnumerable<Ticket>> GetTicketsByUserIdAsync(string userId)
        {
            return await _context.Tickets
                .Include(t => t.Event)
                .Include(t => t.User)
                .Where(t => t.UserId == userId)
                .ToListAsync();
        }

        public async Task<Ticket> GetTicketByIdAsync(int id, string userId)
        {
            var ticket = await _context.Tickets
                .Include(t => t.Event)
                .Include(t => t.User)
                .FirstOrDefaultAsync(t => t.Id == id && t.UserId == userId);
                
            return ticket;
        }

        public async Task<Ticket> BookTicketAsync(int eventId, string userId)
        {
            var eventToBook = await _context.Events.FindAsync(eventId);
            if (eventToBook == null || eventToBook.AvailableTickets <= 0)
            {
                return null; // Event not found or no tickets available
            }

            var userBalance = await _walletService.GetWalletBalanceAsync(userId);
            if (userBalance < eventToBook.Price)
            {
                return null; // Insufficient balance
            }

            var ticket = new Ticket
            {
                EventId = eventId,
                UserId = userId,
                BookingDate = DateTime.Now,
                Status = TicketStatus.Booked
            };

            // Debit the wallet
            var debitSuccess = await _walletService.DebitWalletAsync(userId, eventToBook.Price);
            if (!debitSuccess)
            {
                return null; // Failed to debit the wallet
            }

            // Decrement available tickets
            eventToBook.AvailableTickets--;

            _context.Tickets.Add(ticket);
            await _context.SaveChangesAsync();

            return ticket;
        }

        public async Task<bool> CancelTicketAsync(int id, string userId)
        {
            var ticket = await _context.Tickets
                .Include(t => t.Event)
                .FirstOrDefaultAsync(t => t.Id == id && t.UserId == userId);

            if (ticket == null || ticket.Status == TicketStatus.Cancelled)
            {
                return false; // Ticket not found, doesn't belong to the user, or is already cancelled
            }

            // Mark the ticket as cancelled
            ticket.Status = TicketStatus.Cancelled;

            // Increment the event's available tickets
            var eventToBook = ticket.Event;
            await _walletService.FundWalletAsync(userId, eventToBook.Price);
            eventToBook.AvailableTickets++;

            await _context.SaveChangesAsync();
            return true;
        }

    }
}

