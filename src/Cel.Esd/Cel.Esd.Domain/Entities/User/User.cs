using Cel.Esd.Domain.Interfaces.Entities;
using System;

namespace Cel.Esd.Domain.Entities.User
{
    public class User : EntityBase, IEntityBase
    {
        public User() { }

        public string Name { get; internal set; }
        public string Email { get; internal set; }
        public string Photo { get; internal set; }
        public string Description { get; internal set; }
        public bool Active { get; internal set; }

        internal void ActiveUser() => Active = true;
        internal void inactivate() => Active = false;

        public bool IsValid => throw new NotImplementedException();
    }
}
