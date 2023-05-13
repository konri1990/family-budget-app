using FamilyBudgetAppApi.Domain;
using Microsoft.EntityFrameworkCore;

namespace FamilyBudgetAppApi.DataAccess;

public class FamilyBudgetContext : DbContext
{
    public DbSet<User>? User { get; set; }
    public DbSet<Budget>? Budgets { get; set; }
    public FamilyBudgetContext(DbContextOptions<FamilyBudgetContext> options) : base(options) { }
}