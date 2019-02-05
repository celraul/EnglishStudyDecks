using Cel.Esd.Domain.Interfaces.Entities;

namespace Cel.Esd.Domain.Entities.Phrase
{
    public class Phrase : EntityBase, IEntityBase
    {
        public string TextPrase { get; set; }
        public string Translate { get; set; }
        public string AudioPhrase { get; set; }
        public int UserId { get; set; }
        public int DeckId { get; set; }

        public bool IsValid => throw new System.NotImplementedException();
    }
}
