namespace FamilyBudgetAppApi.Domain;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Email {get; set; } = null!;
    public ICollection<Budget>? Budgets { get; set; }
    public UserRole Role { get; set; }
}
