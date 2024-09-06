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

            // Seeding Events
            modelBuilder.Entity<Event>().HasData(
                new Event
                 {
                     Id = 4351,
                     Name = "Concert",
                     Description = "Join us for an unforgettable evening with the sensational Asake, as he performs live in an electrifying concert. Experience the vibrant atmosphere at Quilox, the premier venue for live music. Enjoy a night filled with amazing performances, incredible energy, and a chance to connect with fellow music enthusiasts. With 100 tickets available at just $50 each, don't miss out on this opportunity to be part of an extraordinary event.",
                     Location = "Quilox",
                     Date = DateTime.Now.AddMonths(1),
                     AvailableTickets = 100,
                     Price = 50,
                     ImageUrl = "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                 },
                new Event
                {
                    Id = 4352,
                    Name = "Art Exhibition",
                    Description = "Discover the latest trends in contemporary art at the Modern Art Exhibition, held at the prestigious Gallery X. This event showcases a diverse collection of artworks from emerging and established artists, offering a unique opportunity to explore cutting-edge art forms and engage in thought-provoking discussions. With 150 tickets available at $30 each, this exhibition promises an inspiring experience for art lovers and collectors alike.",
                    Location = "Gallery X",
                    Date = DateTime.Now.AddMonths(2),
                    AvailableTickets = 150,
                    Price = 30,
                    ImageUrl = "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                new Event
                {
                    Id = 4353,
                    Name = "Tech Conference",
                    Description = "Join industry leaders and innovators at the Annual Tech Conference, where the future of technology is unveiled. Held at the Convention Center, this event offers a series of keynote speeches, panel discussions, and networking opportunities. Attendees will gain insights into the latest technological advancements and trends. With 200 tickets priced at $100 each, this conference is a must-attend for tech enthusiasts and professionals.",
                    Location = "Convention Center",
                    Date = DateTime.Now.AddMonths(3),
                    AvailableTickets = 200,
                    Price = 100,
                    ImageUrl = "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                new Event
                {
                    Id = 4354,
                    Name = "Food Festival",
                    Description = "Experience the ultimate culinary adventure at the Annual Food Festival held in the picturesque City Park. This event features a variety of food stalls, gourmet dishes, and cooking demonstrations from renowned chefs. Enjoy live entertainment and activities for the whole family. With 250 tickets available at $20 each, this festival promises a delightful day filled with delicious flavors and vibrant atmosphere.",
                    Location = "City Park",
                    Date = DateTime.Now.AddMonths(4),
                    AvailableTickets = 250,
                    Price = 20,
                    ImageUrl = "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                new Event
                {
                    Id = 4355,
                    Name = "Music Festival",
                    Description = "Get ready for a spectacular summer experience at the Music Festival, held at the Outdoor Arena. This festival features performances from top artists across various genres, offering an unforgettable musical journey. Enjoy immersive sound experiences, vibrant visuals, and a festive atmosphere with 300 tickets available at $75 each. Perfect for music lovers looking to celebrate summer with great music and amazing company.",
                    Location = "Outdoor Arena",
                    Date = DateTime.Now.AddMonths(5),
                    AvailableTickets = 300,
                    Price = 75,
                    ImageUrl = "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                new Event
                {
                    Id = 4356,
                    Name = "Theater Performance",
                    Description = "Immerse yourself in the world of classic theater with a Shakespearean performance at the Theater House. This evening promises a captivating adaptation of one of Shakespeare's masterpieces, featuring talented actors and stunning stage design. With 80 tickets available at $60 each, this performance offers a unique cultural experience for theater enthusiasts and those looking to enjoy a night of dramatic artistry.",
                    Location = "Theater House",
                    Date = DateTime.Now.AddMonths(6),
                    AvailableTickets = 80,
                    Price = 60,
                    ImageUrl = "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                new Event
                {
                    Id = 4357,
                    Name = "Sports Game",
                    Description = "Cheer on your favorite team at the Local Sports Championship held at the Sports Stadium. This thrilling event features competitive matches, live action, and fan engagement activities. Enjoy the excitement of live sports and support your team in a dynamic and energetic environment. With 500 tickets available at $40 each, this game is a must-attend for sports fans looking for an exhilarating experience.",
                    Location = "Sports Stadium",
                    Date = DateTime.Now.AddMonths(7),
                    AvailableTickets = 500,
                    Price = 40,
                    ImageUrl = "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
                );
        }
    }
}

