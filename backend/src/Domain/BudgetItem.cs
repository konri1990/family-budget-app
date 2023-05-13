namespace FamilyBudgetAppApi.Domain;

public class BudgetItem 
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public Budget Budget { get; set; } = null!;
    public BudgetItemType Type {get; set; }
}
