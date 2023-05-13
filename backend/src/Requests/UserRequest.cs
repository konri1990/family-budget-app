using Microsoft.AspNetCore.Mvc;

namespace FamilyBudgetAppApi.Requests;
public class UserRequest
{
    [FromBody] public string UserName { get; set; } = null!;
    [FromBody] public string? Password { get; set; }
}