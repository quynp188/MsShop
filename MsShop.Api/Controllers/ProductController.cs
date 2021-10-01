using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using MsShop.EF;
using MsShop.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MsShop.Api.Controllers
{
    [Route("odata")]
    public class ProductController : ODataController
    {
        private readonly IRepository<Product, int> productRepository;

        public ProductController(IRepository<Product,int> productRepository)
        {
            this.productRepository = productRepository;
        }
        [EnableQuery]
        [HttpGet("products")]
        public IActionResult Get()
        {
            var product = productRepository.FindAll();
            return Ok(product);
        }
    }
}
