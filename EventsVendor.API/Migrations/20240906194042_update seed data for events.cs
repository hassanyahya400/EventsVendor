using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace EventsVendor.API.Migrations
{
    /// <inheritdoc />
    public partial class updateseeddataforevents : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 2345);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 5670);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 8773);

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 4351,
                columns: new[] { "Date", "Description" },
                values: new object[] { new DateTime(2024, 10, 6, 20, 40, 42, 459, DateTimeKind.Local).AddTicks(7480), "Join us for an unforgettable evening with the sensational Asake, as he performs live in an electrifying concert. Experience the vibrant atmosphere at Quilox, the premier venue for live music. Enjoy a night filled with amazing performances, incredible energy, and a chance to connect with fellow music enthusiasts. With 100 tickets available at just $50 each, don't miss out on this opportunity to be part of an extraordinary event." });

            migrationBuilder.InsertData(
                table: "Events",
                columns: new[] { "Id", "AvailableTickets", "Date", "Description", "ImageUrl", "Location", "Name", "Price" },
                values: new object[,]
                {
                    { 4352, 150, new DateTime(2024, 11, 6, 20, 40, 42, 459, DateTimeKind.Local).AddTicks(7540), "Discover the latest trends in contemporary art at the Modern Art Exhibition, held at the prestigious Gallery X. This event showcases a diverse collection of artworks from emerging and established artists, offering a unique opportunity to explore cutting-edge art forms and engage in thought-provoking discussions. With 150 tickets available at $30 each, this exhibition promises an inspiring experience for art lovers and collectors alike.", "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "Gallery X", "Art Exhibition", 30m },
                    { 4353, 200, new DateTime(2024, 12, 6, 20, 40, 42, 459, DateTimeKind.Local).AddTicks(7540), "Join industry leaders and innovators at the Annual Tech Conference, where the future of technology is unveiled. Held at the Convention Center, this event offers a series of keynote speeches, panel discussions, and networking opportunities. Attendees will gain insights into the latest technological advancements and trends. With 200 tickets priced at $100 each, this conference is a must-attend for tech enthusiasts and professionals.", "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "Convention Center", "Tech Conference", 100m },
                    { 4354, 250, new DateTime(2025, 1, 6, 20, 40, 42, 459, DateTimeKind.Local).AddTicks(7550), "Experience the ultimate culinary adventure at the Annual Food Festival held in the picturesque City Park. This event features a variety of food stalls, gourmet dishes, and cooking demonstrations from renowned chefs. Enjoy live entertainment and activities for the whole family. With 250 tickets available at $20 each, this festival promises a delightful day filled with delicious flavors and vibrant atmosphere.", "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "City Park", "Food Festival", 20m },
                    { 4355, 300, new DateTime(2025, 2, 6, 20, 40, 42, 459, DateTimeKind.Local).AddTicks(7560), "Get ready for a spectacular summer experience at the Music Festival, held at the Outdoor Arena. This festival features performances from top artists across various genres, offering an unforgettable musical journey. Enjoy immersive sound experiences, vibrant visuals, and a festive atmosphere with 300 tickets available at $75 each. Perfect for music lovers looking to celebrate summer with great music and amazing company.", "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "Outdoor Arena", "Music Festival", 75m },
                    { 4356, 80, new DateTime(2025, 3, 6, 20, 40, 42, 459, DateTimeKind.Local).AddTicks(7560), "Immerse yourself in the world of classic theater with a Shakespearean performance at the Theater House. This evening promises a captivating adaptation of one of Shakespeare's masterpieces, featuring talented actors and stunning stage design. With 80 tickets available at $60 each, this performance offers a unique cultural experience for theater enthusiasts and those looking to enjoy a night of dramatic artistry.", "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "Theater House", "Theater Performance", 60m },
                    { 4357, 500, new DateTime(2025, 4, 6, 20, 40, 42, 459, DateTimeKind.Local).AddTicks(7570), "Cheer on your favorite team at the Local Sports Championship held at the Sports Stadium. This thrilling event features competitive matches, live action, and fan engagement activities. Enjoy the excitement of live sports and support your team in a dynamic and energetic environment. With 500 tickets available at $40 each, this game is a must-attend for sports fans looking for an exhilarating experience.", "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "Sports Stadium", "Sports Game", 40m }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 4352);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 4353);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 4354);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 4355);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 4356);

            migrationBuilder.DeleteData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 4357);

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 4351,
                columns: new[] { "Date", "Description" },
                values: new object[] { new DateTime(2024, 10, 6, 9, 4, 24, 893, DateTimeKind.Local).AddTicks(4160), "Asake Live Concert" });

            migrationBuilder.InsertData(
                table: "Events",
                columns: new[] { "Id", "AvailableTickets", "Date", "Description", "ImageUrl", "Location", "Name", "Price" },
                values: new object[,]
                {
                    { 2345, 50, new DateTime(2024, 11, 6, 9, 4, 24, 893, DateTimeKind.Local).AddTicks(4330), "Tech Seminar", null, "Eko Hotel", "Seminar", 20m },
                    { 5670, 30, new DateTime(2024, 12, 6, 9, 4, 24, 893, DateTimeKind.Local).AddTicks(4340), "Programming Workshop", "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "Landmark center", "Workshop", 100m },
                    { 8773, 30, new DateTime(2024, 12, 6, 9, 4, 24, 893, DateTimeKind.Local).AddTicks(4330), "Programming Workshop", null, "O2 Arena", "Workshop", 100m }
                });
        }
    }
}
