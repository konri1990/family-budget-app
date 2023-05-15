namespace FamilyBudgetAppApi.Domain;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Email {get; set; } = null!;
    public UserRole Role { get; set; }
}

public enum UserRole {
    Admin,
    Member
}