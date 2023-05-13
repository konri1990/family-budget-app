using FamilyBudgetAppApi.DataAccess;
using FamilyBudgetAppApi.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FamilyBudgetAppApi.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly FamilyBudgetContext _context;

    public UserController(ILogger<UserController> logger, FamilyBudgetContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public async Task<IEnumerable<User>> Get(int pageSize = 10, int page = 1)
    {
        return await _context.User!.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
    }
}
