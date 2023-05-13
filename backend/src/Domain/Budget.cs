namespace FamilyBudgetAppApi.Domain;

public class Budget
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public User Owner { get; set; } = null!;
    public List<BudgetItem> Items { get; set; } = new();
    public List<User> ListOfSharedUsers { get; set; } = new();
}
