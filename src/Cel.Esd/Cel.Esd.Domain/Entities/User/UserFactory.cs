using Cel.Esd.Domain.Interfaces.Factories;

namespace Cel.Esd.Domain.Entities.User
{
    public class UserFactory : IUserFactory
    {
        public UserFactory() { }

        public UserBuilder DefaultBuilder() => new UserBuilder();

        public class UserBuilder
        {
            private readonly User _user;

            internal UserBuilder()
            {
                _user = new User();
            }

            public UserBuilder WithId(int value)
            {
                _user.Id = value;
                return this;
            }

            public UserBuilder WithName(string value)
            {
                _user.Name = value;
                return this;
            }

            public UserBuilder WithEmail(string value)
            {
                _user.Email = value;
                return this;
            }

            public UserBuilder WithPhoto(string value)
            {
                _user.Photo = value;
                return this;
            }

            public UserBuilder WithDescription(string value)
            {
                _user.Description = value;
                return this;
            }

            public UserBuilder SetActive()
            {
                _user.ActiveUser();
                return this;
            }

            public UserBuilder SetInactive()
            {
                _user.inactivate();
                return this;
            }

            public User Raise()
            {
                if (!_user.IsValid)
                    return new User();

                return _user;
            }
        }
    }
}
