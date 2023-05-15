using FamilyBudgetAppApi.DataAccess;
using FamilyBudgetAppApi.Domain;

public static class Seeder
{
    public static void Initialize(FamilyBudgetContext context)
    {
        context.Database.EnsureCreated();
        
        context.User!.Add(new User{ Id = 1, Name = "Test User 1", Email="test1@test.com", Role = UserRole.Admin });
        context.User!.Add(new User{ Id = 2, Name = "Test User 2", Email="test2@test.com", Role = UserRole.Member});
        context.User!.Add(new User{ Id = 3, Name = "Test User 3", Email="test3@test.com", Role = UserRole.Member});
        context.User!.Add(new User{ Id = 4, Name = "Test User 4", Email="test4@test.com", Role = UserRole.Member});
        context.User!.Add(new User{ Id = 5, Name = "Test User 5", Email="test5@test.com", Role = UserRole.Member});
        context.User!.Add(new User{ Id = 6, Name = "Test User 6", Email="test6@test.com", Role = UserRole.Member});
        context.User!.Add(new User{ Id = 7, Name = "Test User 7", Email="test7@test.com", Role = UserRole.Member});
        context.User!.Add(new User{ Id = 8, Name = "Test User 8", Email="test8@test.com", Role = UserRole.Member});
        context.User!.Add(new User{ Id = 9, Name = "Test User 9", Email="test9@test.com", Role = UserRole.Member});
        context.User!.Add(new User{ Id = 10, Name = "Test User 10", Email="test10@test.com", Role = UserRole.Member});
        
        context.SaveChanges();
    }
}