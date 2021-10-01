using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace MsShop.EF
{
    public class Repository<T, K> : IRepository<T, K> where T : class
    {
        private readonly MsShopDbContext msShopDbContext;
        public Repository(MsShopDbContext msShopDbContext)
        {
            this.msShopDbContext = msShopDbContext;
        }
        public void Add(T entity)
        {
            msShopDbContext.Add(entity);
        }

        public IQueryable<T> FindAll(params Expression<Func<T, object>>[] includeProperties)
        {
            IQueryable<T> Items = this.msShopDbContext.Set<T>();
            if (includeProperties != null)
            {
                foreach (var property in includeProperties)
                {
                    Items = Items.Include(property);
                }
            }
            return Items;
        }

        public IQueryable<T> FindAll(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includeProperties)
        {
            IQueryable<T> Items = this.msShopDbContext.Set<T>();
            if (includeProperties != null)
            {
                foreach (var property in includeProperties)
                {
                    Items = Items.Include(property);
                }
            }
            return Items.Where(predicate);
        }

        public T FindById(K id)
        {
            return this.msShopDbContext.Set<T>().Find(id);
        }

        public T FindSingle(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includeProperties)
        {
            return FindAll(includeProperties).SingleOrDefault(predicate);
        }

        public void Remove(T entity)
        {
            this.msShopDbContext.Set<T>().Remove(entity);
        }

        public void Remove(K id)
        {
            var entity = FindById(id);
            Remove(entity);
        }

        public void RemoveMultiple(List<T> entities)
        {
            this.msShopDbContext.Set<T>().RemoveRange(entities);
        }

        public void Update(T entity)
        {
            this.msShopDbContext.Set<T>().Update(entity);
        }
        public void Dispose()
        {
            if (this.msShopDbContext != null)
            {
                this.msShopDbContext.Dispose();
            }
        }
    }
}
