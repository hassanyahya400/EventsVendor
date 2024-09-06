using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace EventsVendor.API.Migrations
{
    /// <inheritdoc />
    public partial class addseedingdataforeventsandautomaticfundingfornewuser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Events",
                columns: new[] { "Id", "AvailableTickets", "Date", "Description", "ImageUrl", "Location", "Name", "Price" },
                values: new object[,]
                {
                    { 2345, 50, new DateTime(2024, 11, 6, 9, 4, 24, 893, DateTimeKind.Local).AddTicks(4330), "Tech Seminar", null, "Eko Hotel", "Seminar", 20m },
                    { 4351, 100, new DateTime(2024, 10, 6, 9, 4, 24, 893, DateTimeKind.Local).AddTicks(4160), "Asake Live Concert", "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "Quilox", "Concert", 50m },
                    { 5670, 30, new DateTime(2024, 12, 6, 9, 4, 24, 893, DateTimeKind.Local).AddTicks(4340), "Programming Workshop", "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "Landmark center", "Workshop", 100m },
                    { 8773, 30, new DateTime(2024, 12, 6, 9, 4, 24, 893, DateTimeKind.Local).AddTicks(4330), "Programming Workshop", null, "O2 Arena", "Workshop", 100m }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 2345);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 4351);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 5670);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 8773);
        }
    }
}
