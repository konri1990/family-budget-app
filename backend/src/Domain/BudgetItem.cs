namespace FamilyBudgetAppApi.Domain;

public class BudgetItem 
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public decimal Value { get; set; } = 0;
    public int BudgetId { get; set; }
    public Budget Budget { get; set; } = null!;
    public BudgetItemType Type {get; set; }
}
