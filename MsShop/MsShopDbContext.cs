using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MsShop.Entities;

namespace MsShop
{
    public class MsShopDbContext : IdentityDbContext<AppUser, AppRole,string>
    {
        public MsShopDbContext(DbContextOptions<MsShopDbContext> options) : base(options)
        {

        }
        public DbSet<Product> Products { set; get; }
        public DbSet<Category> Categories { set; get; }
        public DbSet<Color> Colors { set; get; }
        public DbSet<Origin> Origins { set; get; }
        public DbSet<ProductColor> ProductColors { set; get; }
        public DbSet<ProductImage> ProductImages { set; get; }
        public DbSet<ProductOrigin> ProductOrigins { set; get; }
        public DbSet<ProductSize> ProductSizes { set; get; }
        public DbSet<ProductTag> ProductTags { set; get; }
        public DbSet<Size> Sizes { set; get; }
        public DbSet<Tag> Tags { set; get; }
    }
}
