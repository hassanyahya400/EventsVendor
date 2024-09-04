using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventsVendor.API.DTOs.EventsVendorUser;
using EventsVendor.API.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EventsVendor.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterUserDto userDetails)
        {
            var result = await _authService.RegisterAsync(userDetails);
            if (result.Succeeded)
            {
                return Ok("User registered successfully");
            }
            return BadRequest(result.Errors);
        }

        [HttpPost("login")]
        public async Task<ActionResult<AuthResponseDto>> Login(LoginUserDto loginDetails)
        {
            var response = await _authService.LoginAsync(loginDetails);
            if (response == null)
            {
                return Unauthorized("Invalid credentials");
            }
            return Ok(response);
        }
    }
}

