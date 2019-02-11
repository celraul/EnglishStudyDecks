using System.Data;

namespace Cel.Esd.SqlServer.Interfaces
{
    public interface IConnectionFactory
    {
        IDbConnection Create();
    }
}
