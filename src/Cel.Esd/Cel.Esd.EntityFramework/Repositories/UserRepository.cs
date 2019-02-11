using Cel.Esd.Domain.Entities.User;
using Cel.Esd.Domain.Interfaces.Repositories;
using Cel.Esd.SqlServer.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Cel.Esd.EntityFramework.Repositories
{
    internal class UserRepository : RepositoryBase<User>, IUserRepository
    {
        private readonly IDbContext _context;
        private DbSet<User> _entities;

        public UserRepository(IDbContext context)
             : base(context)
        {
            _context = context;
            _entities = context.Set<User>();
        }
    }
}
