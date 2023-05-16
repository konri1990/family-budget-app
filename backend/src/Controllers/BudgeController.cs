using FamilyBudgetAppApi.DataAccess;
using FamilyBudgetAppApi.Domain;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FamilyBudgetAppApi.Controllers;

[ApiController]
[Route("[controller]")]
public class BudgetController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly FamilyBudgetContext _context;

    public BudgetController(ILogger<UserController> logger, FamilyBudgetContext context)
    {
        _logger = logger;
        _context = context;
    }

    // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet]
    public async Task<IEnumerable<Budget>> Get(int pageSize = 10, int page = 1)
    {
        return await _context.Budgets!.Include(p => p.Owner).Skip((page - 1) * pageSize).Take(pageSize).Select(b => new Budget {
            Id = b.Id,
            Name = b.Name,
            Owner = b.Owner,
            Items = b.Items
        }).ToListAsync();
    }
}
