using System;

namespace Cel.Esd.Domain.Interfaces.Entities
{
    public interface IEntityBase
    {
        int Id { get; set; }
        DateTime CreateDate { get; set; }
        DateTime? UpdateDate { get; set; }

        bool IsValid { get; }
    }
}
