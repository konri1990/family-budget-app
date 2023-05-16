using FamilyBudgetAppApi.DataAccess;
using FamilyBudgetAppApi.Domain;

public static class Seeder
{
    public static void Initialize(FamilyBudgetContext context)
    {
        context.Database.EnsureCreated();

        context.User!.Add(new User { Id = 1, Name = "Test User 1", Email = "test1@test.com", Role = UserRole.Admin });
        context.User!.Add(new User { Id = 2, Name = "Test User 2", Email = "test2@test.com", Role = UserRole.Member });
        context.User!.Add(new User { Id = 3, Name = "Test User 3", Email = "test3@test.com", Role = UserRole.Member });
        context.User!.Add(new User { Id = 4, Name = "Test User 4", Email = "test4@test.com", Role = UserRole.Member });
        context.User!.Add(new User { Id = 5, Name = "Test User 5", Email = "test5@test.com", Role = UserRole.Member });
        context.User!.Add(new User { Id = 6, Name = "Test User 6", Email = "test6@test.com", Role = UserRole.Member });
        context.User!.Add(new User { Id = 7, Name = "Test User 7", Email = "test7@test.com", Role = UserRole.Member });
        context.User!.Add(new User { Id = 8, Name = "Test User 8", Email = "test8@test.com", Role = UserRole.Member });
        context.User!.Add(new User { Id = 9, Name = "Test User 9", Email = "test9@test.com", Role = UserRole.Member });
        context.User!.Add(new User { Id = 10, Name = "Test User 10", Email = "test10@test.com", Role = UserRole.Member });

        var carBudget = GetCarBudget();
        var houseBudget = GetHouseBudget();
        context.Budgets!.Add(carBudget);
        context.Budgets!.Add(houseBudget);

        context.SaveChanges();
    }

    private static Budget GetCarBudget() => new Budget
    {
        Id = 1,
        Name = "Car Budget",
        Items = new List<BudgetItem>() {
                new BudgetItem
                {
                    Id = 1,
                    Name = "Leasing",
                    BudgetId = 1,
                    Type = BudgetItemType.Expense,
                    Value = 1000
                },
                new BudgetItem
                {
                    Id = 2,
                    Name = "Salary",
                    BudgetId = 1,
                    Type = BudgetItemType.Income,
                    Value = 3000
                },
                new BudgetItem
                {
                    Id = 3,
                    Name = "Insurance",
                    BudgetId = 1,
                    Type = BudgetItemType.Expense,
                    Value = 500
                }
            },
        OwnerId = 1,
        ListOfSharedUsers = new List<User>()
    };

    private static Budget GetHouseBudget() => new Budget
    {
        Id = 2,
        Name = "House Budget",
        Items = new List<BudgetItem>() {
                new BudgetItem
                {
                    Id = 4,
                    Name = "Market",
                    BudgetId = 2,
                    Type = BudgetItemType.Income,
                    Value = 500
                },
                new BudgetItem
                {
                    Id = 5,
                    Name = "Salary",
                    BudgetId = 2,
                    Type = BudgetItemType.Income,
                    Value = 4500
                },
                new BudgetItem
                {
                    Id = 6,
                    Name = "Apartment Renting",
                    BudgetId = 2,
                    Type = BudgetItemType.Income,
                    Value = 700
                },
                new BudgetItem
                {
                    Id = 7,
                    Name = "Payment for laundry",
                    BudgetId = 2,
                    Type = BudgetItemType.Expense,
                    Value = 700
                },
                new BudgetItem
                {
                    Id = 8,
                    Name = "Cloth Shopping",
                    BudgetId = 2,
                    Type = BudgetItemType.Expense,
                    Value = 400
                },
                new BudgetItem
                {
                    Id = 9,
                    Name = "Food Shopping",
                    BudgetId = 2,
                    Type = BudgetItemType.Expense,
                    Value = 800
                }
            },
        OwnerId = 1,
        ListOfSharedUsers = new List<User>()
    };
}