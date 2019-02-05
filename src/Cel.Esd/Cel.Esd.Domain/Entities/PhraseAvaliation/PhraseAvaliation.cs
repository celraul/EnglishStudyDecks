using Cel.Esd.Domain.Enum;
using Cel.Esd.Domain.Interfaces.Entities;
using System;

namespace Cel.Esd.Domain.Entities.PhraseAvaliation
{
    public class PhraseAvaliation : EntityBase, IEntityBase
    {
        public int UserId { get; set; }
        public int PhraseId { get; set; }
        public TypeAvaliationPhrase TypeAvaliationPhrase { get; set; }

        public bool IsValid => throw new NotImplementedException();
    }
}
