using System;
using EventsVendor.API.DTOs.EventsVendorUser;
using Microsoft.AspNetCore.Identity;

namespace EventsVendor.API.Interfaces
{
	public interface IAuthService
	{
		Task<IdentityResult> RegisterAsync(RegisterUserDto userDetails);

		Task<AuthResponseDto> LoginAsync(LoginUserDto loginDetails);
    }
}

