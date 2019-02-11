using Cel.Esd.Domain.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using Cel.Esd.SqlServer.Interfaces;
using System.Collections.Generic;
using Cel.Esd.Domain.Entities;
using System.Threading.Tasks;
using System;
using System.Linq.Expressions;
using System.Linq;

namespace Cel.Esd.EntityFramework.Repositories
{
    internal class RepositoryBase<TEntity> : IRepositoryBase<TEntity> where TEntity : EntityBase
    {
        private readonly IDbContext _context;
        private DbSet<TEntity> _entities;
        private bool _disposed = false;

        public RepositoryBase(IDbContext context)
        {
            _context = context;
            _entities = context.Set<TEntity>();
        }

        public async Task<IEnumerable<TEntity>> GetByPredicate(Expression<Func<TEntity, bool>> predicate)
        {
            var entities = _entities.Where(predicate);
            if (entities == null)
                return new List<TEntity>();

            return await _entities.Where(predicate).ToListAsync();
        }

        public async Task<TEntity> GetById(int id)
        {
            return await _entities.FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task Delete(int id)
        {
            var entity = await _entities.FindAsync(id);
            if (entity != null)
                _entities.Remove(entity);
        }

        public async Task<TEntity> Insert(TEntity entity)
        {
            var result = await _entities.AddAsync(entity);

            return result.Entity;
        }

        public async Task<TEntity> Update(TEntity entity)
        {
            _entities.Update(entity);
            await _context.SaveChangesAsync();

            return entity;
        }

        public void Dispose()
        {
            if (!_disposed)
            {
                _context.Dispose();
                _disposed = true;
            }

            GC.SuppressFinalize(this);
        }

    }
}
