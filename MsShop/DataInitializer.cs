using Microsoft.AspNetCore.Identity;
using MsShop.EF;
using MsShop.Entities;
using MsShop.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MsShop
{
    public class DataInitializer
    {
        private readonly MsShopDbContext msShopDbContext;
        private readonly UserManager<AppUser> userManager;
        private readonly RoleManager<AppRole> roleManager;
        public DataInitializer(MsShopDbContext msShopDbContext,
            UserManager<AppUser> userManager,
            RoleManager<AppRole> roleManager)
        {
            this.msShopDbContext = msShopDbContext;
            this.userManager = userManager;
            this.roleManager = roleManager;
        }
        public async Task Seed()
        {
            if (!roleManager.Roles.Any())
            {
                await this.roleManager.CreateAsync(new AppRole
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = "Admin",
                    Description = "Super Admin"
                });
            }
            if (userManager.Users.Any())
            {
                var user = await this.userManager.FindByEmailAsync("phuquyfrec@gmail.com");
                await this.userManager.DeleteAsync(user);
                await this.userManager.CreateAsync(new AppUser
                {
                    Id = Guid.NewGuid().ToString(),
                    FullName = "Nguyễn Phú Quý",
                    Email = "phuquyfrec@gmail.com",
                    Adress = "Mỹ Đình 2- Nam Từ Liêm - Hà Nội",
                    Gender = Gender.Female,
                    UserName = "qunp",
                    DepartmentId = Guid.NewGuid().ToString(),
                    PhoneNumber = "0349626569"
                }, "Hoannt0509@");
                var usserCreated = await this.userManager.FindByEmailAsync("phuquyfrec@gmail.com");
                await this.userManager.AddToRoleAsync(usserCreated, "Admin");
            }
            else
            {
                await this.userManager.CreateAsync(new AppUser
                {
                    Id = Guid.NewGuid().ToString(),
                    FullName = "Nguyễn Phú Quý",
                    Email = "phuquyfrec@gmail.com",
                    Adress = "Mỹ Đình 2- Nam Từ Liêm - Hà Nội",
                    Gender = Gender.Female,
                    UserName = "qunp",
                    DepartmentId = Guid.NewGuid().ToString(),
                    PhoneNumber = "0349626569"
                }, "Hoannt0509@");
                var usserCreated = await this.userManager.FindByEmailAsync("phuquyfrec@gmail.com");
                await this.userManager.AddToRoleAsync(usserCreated, "Admin");
            }
            if (!msShopDbContext.Categories.Any())
            {
                msShopDbContext.Categories.Add(new Category()
                {
                    Name = "Camera",
                    Image = string.Empty,
                });
            }
            if (!msShopDbContext.Colors.Any())
            {
                msShopDbContext.Colors.AddRange(new List<Color> {
                new Color {Name="White", Code = "#ffffff" },
                new Color {Name="black", Code = "#000000" },
                new Color {Name="Gray", Code = "#808080" },
                new Color {Name="red", Code = "ff0000" },
                new Color {Name="green",Code = "008000"},
                new Color {Name="blue",Code = "0000ff"},
                });              
            }
            if (!msShopDbContext.Sizes.Any())
            {
                msShopDbContext.Sizes.AddRange(new List<Size> {
                new Size {Name="XXL",Code="XXL"},
                new Size {Name="XL" ,Code="XL"},
                new Size {Name="L" ,Code="L"},
                new Size {Name="M" ,Code="M"},
                new Size {Name="S",Code="S" },
                });
            }
            if (!msShopDbContext.Origins.Any())
            {
                msShopDbContext.Origins.AddRange(new List<Origin> {
                new Origin {Name="Việt Nam", Code = "VN" },
                new Origin {Name="Trung QUốc",Code = "CN"},
                new Origin {Name="Mỹ",Code = "USA"},
                });
            }
            if (!msShopDbContext.Tags.Any())
            {
                msShopDbContext.Tags.AddRange(new List<Tag> {
                new Tag {Name="camera" },
                new Tag {Name="aodep"},
                });
            }
           
            if (!msShopDbContext.Products.Any())
            {
                msShopDbContext.Products.AddRange(new List<Product> {new Product {ProductName ="Camera xiaomi", ProductNumber ="012", CategoryId =2, Unit="Cái", Price =1000000 , Status = ProductStatus.Available}});
            }
            await msShopDbContext.SaveChangesAsync();
            if (!msShopDbContext.ProductImages.Any())
            {
                msShopDbContext.ProductImages.AddRange(new List<ProductImage> {
                new ProductImage {ProductId=6, Path = "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/c/a/camera-ip-wifi-ezviz-c6n-1080p-2mp.jpg" }});
            }
            if (!msShopDbContext.ProductTags.Any())
            {
                msShopDbContext.ProductTags.AddRange(new List<ProductTag> {
                new ProductTag {ProductId=6, TagId =11} });
            }
            if (!msShopDbContext.ProductSizes.Any())
            {
                msShopDbContext.ProductSizes.AddRange(new List<ProductSize> {
                new ProductSize {ProductId=6, SizeId =26 }});
            }
            if (!msShopDbContext.ProductColors.Any())
            {
                msShopDbContext.ProductColors.AddRange(new List<ProductColor> {
                new ProductColor {ProductId=6, ColorId =7 }});
            }
            if (!msShopDbContext.ProductOrigins.Any())
            {
                msShopDbContext.ProductOrigins.AddRange(new List<ProductOrigin> {
                new ProductOrigin {ProductId=6, OriginId =16 }});
            }
            await msShopDbContext.SaveChangesAsync();
        }
    }
}
