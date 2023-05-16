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
        return await _context.Budgets!.Include(p => p.Owner)
        .Skip((page - 1) * pageSize)
        .Take(pageSize)
        .Select(b => new Budget
        {
            Id = b.Id,
            Name = b.Name,
            Owner = b.Owner,
            Items = b.Items
        }).ToListAsync();
    }

    [HttpGet]
    [Route("{budgetId}")]
    public async Task<IEnumerable<BudgetItem>> GetBudgetItems(int budgetId, int pageSize = 10, int page = 1)
    {
        return await _context.BudgetItems!.Include(p => p.Budget)
            .Where(p => p.BudgetId == budgetId)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .Select(b => new BudgetItem
            {
                Id = b.Id,
                Name = b.Name,
                Value = b.Value,
                Type = b.Type
            }).ToListAsync();
    }
}
