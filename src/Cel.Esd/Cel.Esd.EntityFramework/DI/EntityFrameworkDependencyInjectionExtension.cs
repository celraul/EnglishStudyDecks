using Cel.Esd.Domain.Interfaces.Repositories;
using Cel.Esd.EntityFramework.Repositories;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class EntityFrameWorkDependencyInjectionExtension
    {
        public static IServiceCollection AddEntityFrameWorkDependencyInjection(this IServiceCollection services)
        {
            services.TryAddScoped(typeof(IUnitOfWork), typeof(UnitOfWork));

            return services;
        }
    }
}
