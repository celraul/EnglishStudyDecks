using Cel.Esd.Domain.Entities.User;
using Cel.Esd.Domain.Interfaces.Factories;
using Cel.Esd.Domain.Interfaces.Notifications;
using Cel.Esd.Domain.Notifications;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class DomainDependencyInjectionExtension
    {
        public static IServiceCollection AddDomainDependencyInjection(this IServiceCollection services)
        {
            services.TryAddScoped<INotificationHandler, NotificationHandler>();

            services.TryAddTransient<IUserFactory, UserFactory>();

            return services;
        }

    }
}
