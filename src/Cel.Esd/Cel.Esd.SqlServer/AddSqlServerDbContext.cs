using Cel.Esd.SqlServer.EntityFramework;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Cel.Esd.SqlServer
{
    public static class AddSqlServerDbContext
    {
        public static IServiceCollection AddSqlServerContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<EsdDbContext>(options =>
            options.UseSqlServer(configuration.GetConnectionString(SqlServerConsts.ConnectionString)));

            return services;
        }
    }
}
