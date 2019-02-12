namespace Microsoft.Extensions.DependencyInjection
{
    public static class DependencyInjectionExtension
    {
        public static IServiceCollection AddDependencyInjection(this IServiceCollection services)
        {
            services.AddDomainDependencyInjection()
                    .AddSqlServerDependencyInjection()
                    .AddEntityFrameWorkDependencyInjection();

            return services;
        }
    }
}
