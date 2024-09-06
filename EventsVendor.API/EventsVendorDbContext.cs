using System;
using EventsVendor.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EventsVendor
{
    public class EventsVendorDbContext : IdentityDbContext<EventsVendorUser>
    {
        public EventsVendorDbContext(DbContextOptions<EventsVendorDbContext> options) : base(options)
        {
        }

        public DbSet<Event> Events { get; set; }

        public DbSet<Ticket> Tickets { get; set; }

        //public DbSet<EventsVendorUser> EventsVendorUser { get; set; }

        public DbSet<WalletTransaction> WalletTransactions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Ticket - Event relationship
            modelBuilder.Entity<Ticket>()
                .HasOne(t => t.Event)
                .WithMany(e => e.Tickets)
                .HasForeignKey(t => t.EventId);

            // Ticket - User relationship
            modelBuilder.Entity<Ticket>()
                .HasOne(t => t.User)
                .WithMany(u => u.Tickets)
                .HasForeignKey(t => t.UserId);

            // WalletTransaction - User relationship
            modelBuilder.Entity<WalletTransaction>()
                .HasOne(w => w.User)
                .WithMany(u => u.WalletTransactions)
                .HasForeignKey(w => w.UserId);

            //// Seeding Users
            //modelBuilder.Entity<EventsVendorUser>().HasData(
            //    new EventsVendorUser {Username = "user1", Email = "user1@events.com", WalletBalance = 100.00m },
            //    new EventsVendorUser {Username = "user2", Email = "user2@events.com", WalletBalance = 10.00m },
            //    new EventsVendorUser {Username = "user3", Email = "user3@events.com", WalletBalance = 20.00m }
            //);

            // Seeding Events
            modelBuilder.Entity<Event>().HasData(
                new Event { Id = 4351, Name = "Concert", Description = "Asake Live Concert", Location = "Quilox", Date = DateTime.Now.AddMonths(1), AvailableTickets = 100, Price = 50, ImageUrl= "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
                new Event { Id = 2345, Name = "Seminar", Description = "Tech Seminar", Location = "Eko Hotel", Date = DateTime.Now.AddMonths(2), AvailableTickets = 50, Price = 20 },
                new Event { Id = 8773, Name = "Workshop", Description = "Programming Workshop", Location = "O2 Arena", Date = DateTime.Now.AddMonths(3), AvailableTickets = 30, Price = 100 },
                new Event { Id = 5670, Name = "Workshop", Description = "Programming Workshop", Location = "Landmark center", Date = DateTime.Now.AddMonths(3), AvailableTickets = 30, Price =100, ImageUrl = "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }

            );

            //// Seeding Tickets
            //modelBuilder.Entity<Ticket>().HasData(
            //    new Ticket { Id = 1, EventId = 1, UserId = 9839, BookingDate = DateTime.Now, Status = TicketStatus.Booked },
            //    new Ticket { Id = 2, EventId = 2, UserId = 4353, BookingDate = DateTime.Now, Status = TicketStatus.Booked },
            //    new Ticket { Id = 3, EventId = 3, UserId = 9923, BookingDate = DateTime.Now, Status = TicketStatus.Booked }
            //);

            //// Seeding Wallet Transactions
            //modelBuilder.Entity<WalletTransaction>().HasData(
            //    new WalletTransaction { Id = 1, UserId = 9839, Amount = 50.00m, TransactionDate = DateTime.Now, Type = TransactionType.Debit },
            //    new WalletTransaction { Id = 2, UserId = 4353, Amount = 20.00m, TransactionDate = DateTime.Now, Type = TransactionType.Debit },
            //    new WalletTransaction { Id = 3, UserId = 9923, Amount = 100.00m, TransactionDate = DateTime.Now, Type = TransactionType.Debit }
            //);
        }
    }
}

