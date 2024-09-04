using System;
namespace EventsVendor.API.DTOs.EventsVendorUser
{
	public class RegisterUserDto
	{
		public string Email { get; set; }

		public string Password { get; set; }

		public string Role { get; set; }
	}
}