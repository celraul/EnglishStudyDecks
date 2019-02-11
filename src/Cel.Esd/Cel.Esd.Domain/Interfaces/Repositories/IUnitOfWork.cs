using Cel.Esd.Domain.Entities.User;
using System.Threading.Tasks;

namespace Cel.Esd.Domain.Interfaces.Repositories
{
    public interface IUnitOfWork
    {
        IRepositoryBase<User> UserRepository { get; }

        Task Save();
    }
}
