using Microsoft.AspNetCore.Builder;

namespace Cel.Esd.Api.Extensions.Swagger
{
    internal static class SwaggerApplicationBuilderExtensions
    {
        public static IApplicationBuilder AddSwaggerUsage(this IApplicationBuilder app)
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", WebApiConsts.WebApiName);
            });

            return app;
        }
    }
}
