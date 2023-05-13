using FamilyBudgetAppApi.DataAccess;
using FamilyBudgetAppApi.Domain;

public static class Seeder
{
    public static void Initialize(FamilyBudgetContext context)
    {
        context.Database.EnsureCreated();
        
        context.User!.Add(new User{ Id = 1, Name = "Test User 1"});
        context.User!.Add(new User{ Id = 2, Name = "Test User 2"});
        context.User!.Add(new User{ Id = 3, Name = "Test User 3"});
        context.User!.Add(new User{ Id = 4, Name = "Test User 4"});
        context.User!.Add(new User{ Id = 5, Name = "Test User 5"});
        context.User!.Add(new User{ Id = 6, Name = "Test User 6"});
        context.User!.Add(new User{ Id = 7, Name = "Test User 7"});
        context.User!.Add(new User{ Id = 8, Name = "Test User 8"});
        context.User!.Add(new User{ Id = 9, Name = "Test User 9"});
        context.User!.Add(new User{ Id = 10, Name = "Test User 10"});
        
        context.SaveChanges();
    }
}