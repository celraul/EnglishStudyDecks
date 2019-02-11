using Cel.Esd.SqlServer.Interfaces;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Cel.Esd.SqlServer.Dapper
{
    internal class ConnectionFactory : IConnectionFactory
    {
        private readonly string _connectionString;
        public ConnectionFactory(IConfiguration configuration) =>
            _connectionString = configuration.GetConnectionString(SqlServerConsts.ConnectionString);

        public IDbConnection Create() => new SqlConnection(_connectionString);
    }
}
