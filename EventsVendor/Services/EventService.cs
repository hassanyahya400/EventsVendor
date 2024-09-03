using System;
namespace EventsVendor.Services
{
    using EventsVendor.Interfaces;
    using EventsVendor.Models;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public class EventService : IEventService
    {
        private readonly EventsVendorDbContext _context;

        public EventService(EventsVendorDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Event>> GetAllEventsAsync()
        {
            return await _context.Events.ToListAsync();
        }

        public async Task<Event?> GetEventByIdAsync(int id)
        {
            return await _context.Events.FindAsync(id);
        }

        public async Task<Event> CreateEventAsync(Event @event)
        {
            _context.Events.Add(@event);
            await _context.SaveChangesAsync();
            return @event;
        }

        public async Task<bool> UpdateEventAsync(int id, Event @event)
        {
            var existingEvent = await _context.Events.FindAsync(id);
            if (existingEvent == null)
            {
                return false;
            }

            existingEvent.Name = @event.Name;
            existingEvent.Description = @event.Description;
            existingEvent.Location = @event.Location;
            existingEvent.Date = @event.Date;
            existingEvent.AvailableTickets = @event.AvailableTickets;
            existingEvent.Price = @event.Price;

            _context.Events.Update(existingEvent);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteEventAsync(int id)
        {
            var @event = await _context.Events.FindAsync(id);
            if (@event == null)
            {
                return false;
            }

            _context.Events.Remove(@event);
            await _context.SaveChangesAsync();
            return true;
        }
    }

}

