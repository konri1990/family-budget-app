using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using FamilyBudgetAppApi.DataAccess;
using FamilyBudgetAppApi.Domain;
using FamilyBudgetAppApi.Infrastructure;
using FamilyBudgetAppApi.Requests;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace FamilyBudgetAppApi.Controllers;

[ApiController]
[Route("[controller]")]
public class TokenController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly FamilyBudgetContext _context;
    private readonly JWTTokenSettings _settings;

    public TokenController(ILogger<UserController> logger, FamilyBudgetContext context, JWTTokenSettings settings)
    {
        _logger = logger;
        _context = context;
        _settings = settings;
    }

    [AllowAnonymous]
    [HttpPost]
    public async Task<IResult> Create(UserRequest userRequest)
    {
        var user = await _context.User!.Where(u => u.Name == userRequest.UserName).FirstOrDefaultAsync();
        
        if (user != null)
        {
            var token = GenerateToken(user);
            return Results.Ok(token);
        }
        
        return Results.Unauthorized();
    }

    private string GenerateToken(User user)
    {
        var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_settings.Key));
        var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
        var tokenOptions = new JwtSecurityToken(
            issuer: _settings.Issuer, 
            audience: _settings.Audience, 
            claims: new List <Claim>(), 
            expires: DateTime.Now.AddMinutes(6), 
            signingCredentials: signinCredentials
        );
        var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        return tokenString;
    }
}


