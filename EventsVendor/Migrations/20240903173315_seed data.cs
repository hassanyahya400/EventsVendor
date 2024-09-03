using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace EventsVendor.Migrations
{
    /// <inheritdoc />
    public partial class seeddata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Events",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Events",
                columns: new[] { "Id", "AvailableTickets", "Date", "Description", "ImageUrl", "Location", "Name", "Price" },
                values: new object[,]
                {
                    { 1, 100, new DateTime(2024, 10, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7120), "Asake Live Concert", null, "Quilox", "Concert", 50.00m },
                    { 2, 50, new DateTime(2024, 11, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7180), "Tech Seminar", null, "Eko Hotel", "Seminar", 20.00m },
                    { 3, 30, new DateTime(2024, 12, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7190), "Programming Workshop", null, "O2 Arena", "Workshop", 100.00m }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "PasswordHash", "Username", "WalletBalance" },
                values: new object[,]
                {
                    { 4353, "user2@evendor.com", null, "user2", 10.00m },
                    { 9839, "user1@evendor.com", null, "user1", 100.00m },
                    { 9923, "user3@evendor.com", null, "user3", 20.00m }
                });

            migrationBuilder.InsertData(
                table: "Tickets",
                columns: new[] { "Id", "BookingDate", "EventId", "Status", "UserId" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 9, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7210), 1, 0, 9839 },
                    { 2, new DateTime(2024, 9, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7210), 2, 0, 4353 },
                    { 3, new DateTime(2024, 9, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7220), 3, 0, 9923 }
                });

            migrationBuilder.InsertData(
                table: "WalletTransactions",
                columns: new[] { "Id", "Amount", "TransactionDate", "Type", "UserId" },
                values: new object[,]
                {
                    { 1, 50.00m, new DateTime(2024, 9, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7250), 1, 9839 },
                    { 2, 20.00m, new DateTime(2024, 9, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7250), 1, 4353 },
                    { 3, 100.00m, new DateTime(2024, 9, 3, 18, 33, 14, 974, DateTimeKind.Local).AddTicks(7250), 1, 9923 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Tickets",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Tickets",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Tickets",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "WalletTransactions",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "WalletTransactions",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "WalletTransactions",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4353);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 9839);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 9923);

            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Events");
        }
    }
}
