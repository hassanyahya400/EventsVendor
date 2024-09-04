using EventsVendor;
using EventsVendor.Interfaces;
using EventsVendor.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure the MySQL DbContext with connection string
var eventsVendorDbConnectionString = Environment.GetEnvironmentVariable("EventsVendorDbConnectionString");

builder.Services.AddDbContext<EventsVendorDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("EventsVendorDbConnectionString"),
    ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("EventsVendorDbConnectionString"))));

// Register Services
builder.Services.AddScoped<IWalletService, WalletService>();
builder.Services.AddScoped<IEventService, EventService>();
builder.Services.AddScoped<ITicketService, TicketService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

