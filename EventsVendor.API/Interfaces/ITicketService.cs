using System;
using EventsVendor.Models;

namespace EventsVendor.Interfaces
{
    public interface ITicketService
    {
        Task<IEnumerable<Ticket>> GetTicketsByUserIdAsync(string userId);

        Task<Ticket> GetTicketByIdAsync(int id, string userId);

        Task<Ticket> BookTicketAsync(int eventId, string userId);

        Task<bool> CancelTicketAsync(int id, string userId);
    }
}