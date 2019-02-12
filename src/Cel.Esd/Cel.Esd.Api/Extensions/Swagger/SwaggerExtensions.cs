using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.PlatformAbstractions;
using Swashbuckle.AspNetCore.Swagger;
using System.IO;

namespace Cel.Esd.Api.Extensions.Swagger
{
    internal static class SwaggerExtensions
    {
        public static IServiceCollection AddSwaggerConfigurations(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1",
                    new Info
                    {
                        Title = WebApiConsts.WebApiName,
                        Version = WebApiConsts.WebApiVersion,
                        Description = WebApiConsts.WebApiDescription,
                        Contact = new Contact
                        {
                            Name = WebApiConsts.WebApiContactName,
                            Url = WebApiConsts.WebApiContactUrl
                        }
                    });

                string caminhoAplicacao = PlatformServices.Default.Application.ApplicationBasePath;
                string nomeAplicacao = PlatformServices.Default.Application.ApplicationName;
                string caminhoXmlDoc = Path.Combine(caminhoAplicacao, $"{nomeAplicacao}.xml");

                c.IncludeXmlComments(caminhoXmlDoc);
            });

            return services;
        }
    }
}
