﻿// <auto-generated />
using System;
using EventsVendor;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EventsVendor.Migrations
{
    [DbContext(typeof(EventsVendorDbContext))]
    partial class EventsVendorDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.20")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("EventsVendor.Models.Event", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("AvailableTickets")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Description")
                        .HasColumnType("longtext");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("longtext");

                    b.Property<string>("Location")
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(65,30)");

                    b.HasKey("Id");

                    b.ToTable("Events");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AvailableTickets = 100,
                            Date = new DateTime(2024, 10, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7120),
                            Description = "Asake Live Concert",
                            Location = "Quilox",
                            Name = "Concert",
                            Price = 50.00m
                        },
                        new
                        {
                            Id = 2,
                            AvailableTickets = 50,
                            Date = new DateTime(2024, 11, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7180),
                            Description = "Tech Seminar",
                            Location = "Eko Hotel",
                            Name = "Seminar",
                            Price = 20.00m
                        },
                        new
                        {
                            Id = 3,
                            AvailableTickets = 30,
                            Date = new DateTime(2024, 12, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7190),
                            Description = "Programming Workshop",
                            Location = "O2 Arena",
                            Name = "Workshop",
                            Price = 100.00m
                        });
                });

            modelBuilder.Entity("EventsVendor.Models.Ticket", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("BookingDate")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("EventId")
                        .HasColumnType("int");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("EventId");

                    b.HasIndex("UserId");

                    b.ToTable("Tickets");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            BookingDate = new DateTime(2024, 9, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7210),
                            EventId = 1,
                            Status = 0,
                            UserId = 9839
                        },
                        new
                        {
                            Id = 2,
                            BookingDate = new DateTime(2024, 9, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7210),
                            EventId = 2,
                            Status = 0,
                            UserId = 4353
                        },
                        new
                        {
                            Id = 3,
                            BookingDate = new DateTime(2024, 9, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7220),
                            EventId = 3,
                            Status = 0,
                            UserId = 9923
                        });
                });

            modelBuilder.Entity("EventsVendor.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("longtext");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<decimal>("WalletBalance")
                        .HasColumnType("decimal(65,30)");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 9839,
                            Email = "user1@evendor.com",
                            Username = "user1",
                            WalletBalance = 100.00m
                        },
                        new
                        {
                            Id = 4353,
                            Email = "user2@evendor.com",
                            Username = "user2",
                            WalletBalance = 10.00m
                        },
                        new
                        {
                            Id = 9923,
                            Email = "user3@evendor.com",
                            Username = "user3",
                            WalletBalance = 20.00m
                        });
                });

            modelBuilder.Entity("EventsVendor.Models.WalletTransaction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(65,30)");

                    b.Property<DateTime>("TransactionDate")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("WalletTransactions");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Amount = 50.00m,
                            TransactionDate = new DateTime(2024, 9, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7250),
                            Type = 1,
                            UserId = 9839
                        },
                        new
                        {
                            Id = 2,
                            Amount = 20.00m,
                            TransactionDate = new DateTime(2024, 9, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7250),
                            Type = 1,
                            UserId = 4353
                        },
                        new
                        {
                            Id = 3,
                            Amount = 100.00m,
                            TransactionDate = new DateTime(2024, 9, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7250),
                            Type = 1,
                            UserId = 9923
                        });
                });

            modelBuilder.Entity("EventsVendor.Models.Ticket", b =>
                {
                    b.HasOne("EventsVendor.Models.Event", "Event")
                        .WithMany("Tickets")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EventsVendor.Models.User", "User")
                        .WithMany("Tickets")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Event");

                    b.Navigation("User");
                });

            modelBuilder.Entity("EventsVendor.Models.WalletTransaction", b =>
                {
                    b.HasOne("EventsVendor.Models.User", "User")
                        .WithMany("WalletTransactions")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("EventsVendor.Models.Event", b =>
                {
                    b.Navigation("Tickets");
                });

            modelBuilder.Entity("EventsVendor.Models.User", b =>
                {
                    b.Navigation("Tickets");

                    b.Navigation("WalletTransactions");
                });
#pragma warning restore 612, 618
        }
    }
}
