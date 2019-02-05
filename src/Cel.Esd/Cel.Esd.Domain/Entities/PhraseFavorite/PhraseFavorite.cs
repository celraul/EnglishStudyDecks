using Cel.Esd.Domain.Interfaces.Entities;
using System;

namespace Cel.Esd.Domain.Entities.PhraseFavorite
{
    public class PhraseFavorite : EntityBase, IEntityBase
    {
        public int UserId { get; set; }
        public int PhraseId { get; set; }

        public bool IsValid => throw new NotImplementedException();
    }
}
