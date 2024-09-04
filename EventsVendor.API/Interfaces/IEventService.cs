using System;
using EventsVendor.Models;

namespace EventsVendor.Interfaces
{
    public interface IEventService
    {
        Task<IEnumerable<Event>> GetAllEventsAsync();

        Task<Event?> GetEventByIdAsync(int id);

        Task<Event> CreateEventAsync(Event @event);

        Task<bool> UpdateEventAsync(int id, Event @event);

        Task<bool> DeleteEventAsync(int id);
    }
}