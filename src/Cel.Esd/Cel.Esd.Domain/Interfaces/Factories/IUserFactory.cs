using static Cel.Esd.Domain.Entities.User.UserFactory;

namespace Cel.Esd.Domain.Interfaces.Factories
{
    public interface IUserFactory
    {
        UserBuilder DefaultBuilder();
    }
}
