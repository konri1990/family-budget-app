using FamilyBudgetAppApi.Domain;
using Microsoft.AspNetCore.Mvc;

namespace FamilyBudgetAppApi.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;

    public UserController(ILogger<UserController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<User> Get(int take = 10, int skip = 0)
    {
        return Enumerable.Range(1, 5).Select(index => new User
        {
            Id = index,
            Name = $"Test User{index}"
        })
        .ToArray();
    }
}
