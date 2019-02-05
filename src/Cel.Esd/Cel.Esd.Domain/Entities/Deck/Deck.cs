using System;
using Cel.Esd.Domain.Interfaces.Entities;

namespace Cel.Esd.Domain.Entities.Deck
{
    public class Deck : EntityBase, IEntityBase
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int UserId { get; set; }
        public DateTime? DateStart { get; set; }
        public DateTime? DateEnd { get; set; }
        public bool DeckCrazy { get; set; }

        public bool IsValid => throw new NotImplementedException();

    }
}
