using System.Threading.Tasks;
using Cel.Esd.Domain.Entities.User;
using Cel.Esd.Domain.Interfaces.Repositories;
using Cel.Esd.SqlServer.Interfaces;

namespace Cel.Esd.EntityFramework.Repositories
{
    internal class UnitOfWork : IUnitOfWork
    {
        private readonly IDbContext _context;
        private readonly IRepositoryBase<User> _userRepository;

        public UnitOfWork(IDbContext dbContext)
        {
            _context = dbContext;
        }

        public IRepositoryBase<User> UserRepository => _userRepository ?? new RepositoryBase<User>(_context);

        public Task Save()
        {
            throw new System.NotImplementedException();
        }
    }
}
