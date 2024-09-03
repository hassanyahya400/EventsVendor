using System;
using EventsVendor.Models;

namespace EventsVendor.Interfaces
{
    public interface ITicketService
    {
        Task<IEnumerable<Ticket>> GetTicketsByUserIdAsync(int userId);

        Task<Ticket> GetTicketByIdAsync(int id, int userId);

        Task<Ticket> BookTicketAsync(int eventId, int userId);

        Task<bool> CancelTicketAsync(int id, int userId);
    }
}