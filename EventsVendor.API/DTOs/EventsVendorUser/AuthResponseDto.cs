using System;
namespace EventsVendor.API.DTOs.EventsVendorUser
{
	public class AuthResponseDto
	{
		public string Token { get; set; }

		public DateTime Expiration { get; set; }

	}
}

