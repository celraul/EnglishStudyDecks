using Cel.Esd.SqlServer.EntityFramework.Mapping;
using Cel.Esd.SqlServer.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Cel.Esd.SqlServer.EntityFramework
{
    public class EsdDbContext : DbContext, IDbContext
    {
        public EsdDbContext(DbContextOptions<EsdDbContext> options)
             : base(options) { }

        public EsdDbContext() { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new UserConfiguration());
        }

        public async Task<int> SaveChangesAsync() => await base.SaveChangesAsync();
    }
}
