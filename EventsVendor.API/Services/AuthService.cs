using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using EventsVendor.API.DTOs.EventsVendorUser;
using EventsVendor.API.Interfaces;
using EventsVendor.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;


public class AuthService : IAuthService
{
    private readonly UserManager<EventsVendorUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly IConfiguration _configuration;

    public AuthService(UserManager<EventsVendorUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _configuration = configuration;
    }

    public async Task<IdentityResult> RegisterAsync(RegisterUserDto userDetails)
    {
        var user = new EventsVendorUser { UserName = userDetails.Email, Email = userDetails.Email };
        var result = await _userManager.CreateAsync(user, userDetails.Password);

        if (result.Succeeded)
        {
            await _userManager.AddToRoleAsync(user, userDetails.Role);
        }

        return result;
    }

    public async Task<AuthResponseDto> LoginAsync(LoginUserDto loginDetails)
    {
        var user = await _userManager.FindByNameAsync(loginDetails.Username);
        if (user == null || !await _userManager.CheckPasswordAsync(user, loginDetails.Password))
        {
            return null; // Invalid credentials
        }

        var roles = await _userManager.GetRolesAsync(user);
        var token = GenerateJwtToken(user, roles);

        return new AuthResponseDto { Token = token, Expiration = DateTime.UtcNow.AddMinutes(double.Parse(_configuration["JwtSettings:DurationInMinutes"])) };
    }

    private string GenerateJwtToken(EventsVendorUser user, IList<string> roles)
    {
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(ClaimTypes.NameIdentifier, user.Id)
        }.Union(roles.Select(role => new Claim(ClaimsIdentity.DefaultRoleClaimType, role)));

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:Key"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var token = new JwtSecurityToken(
            issuer: _configuration["JwtSettings:Issuer"],
            audience: _configuration["JwtSettings:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(double.Parse(_configuration["JwtSettings:DurationInMinutes"])),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}