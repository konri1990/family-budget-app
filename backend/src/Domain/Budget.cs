namespace FamilyBudgetAppApi.Domain;

public class Budget
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public int OwnerId { get; set; }
    public User Owner { get; set; } = null!;
    public ICollection<BudgetItem>? Items { get; set; }
    public ICollection<User>? ListOfSharedUsers { get; set; }
}
