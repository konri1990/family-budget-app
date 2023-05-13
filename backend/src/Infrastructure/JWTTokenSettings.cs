namespace FamilyBudgetAppApi.Infrastructure;

public class JWTTokenSettings
{
    public string Issuer { get; }
    public string Audience { get; }
    public string Key { get; }

    public JWTTokenSettings(string issuer, string audience, string key)
    {
        Issuer = issuer;
        Audience = audience;
        Key = key;
    }
}