using FamilyBudgetAppApi.Domain;
using Microsoft.EntityFrameworkCore;

namespace FamilyBudgetAppApi.DataAccess;

public class FamilyBudgetContext : DbContext
{
    public DbSet<User>? User { get; set; }
    public DbSet<Budget>? Budgets { get; set; }
    public DbSet<BudgetItem>? BudgetItems { get; set; }
    public FamilyBudgetContext(DbContextOptions<FamilyBudgetContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Budget>()
            .HasOne(e => e.Owner)
            .WithMany(e => e.Budgets)
            .HasForeignKey(e => e.OwnerId)
            .HasPrincipalKey(e => e.Id)
            .IsRequired();

        modelBuilder.Entity<BudgetItem>()
            .HasOne(e => e.Budget)
            .WithMany(e => e.Items)
            .HasForeignKey(e => e.BudgetId)
            .HasPrincipalKey(e => e.Id)
            .IsRequired();
    }
}