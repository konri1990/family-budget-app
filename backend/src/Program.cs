using FamilyBudgetAppApi.DataAccess;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("FamilyBudget");
builder.Services.AddDbContext<FamilyBudgetContext>(options =>
    // options.UseNpgsql(connectionString)
    options.UseInMemoryDatabase(databaseName: "FamilyBudget")
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

SeedDatabase();

void SeedDatabase() {
    using(var scope = app.Services.CreateScope())
    {
        var scopedContext = scope.ServiceProvider.GetRequiredService<FamilyBudgetContext>();
        Seeder.Initialize(scopedContext);
    }
}

app.Run();