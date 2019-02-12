using Cel.Esd.SqlServer.Dapper;
using Cel.Esd.SqlServer.EntityFramework;
using Cel.Esd.SqlServer.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class SqlServerDependencyInjectionExtension
    {
        public static IServiceCollection AddSqlServerDependencyInjection(this IServiceCollection services)
        {
            services.TryAddScoped<IDbContext>(provider => provider.GetService<EsdDbContext>());
            services.TryAddSingleton<IConnectionFactory, ConnectionFactory>();

            return services;
        }
    }
}
