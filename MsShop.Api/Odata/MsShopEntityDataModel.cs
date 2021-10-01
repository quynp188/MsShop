using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;
using MsShop.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MsShop.Api.Odata
{
    public class MsShopEntityDataModel
    {
        public IEdmModel GetEdmModel()
        {
            var builder = new ODataConventionModelBuilder();
           
            builder.Namespace = "MsShop.Api";
            builder.ContainerName = "MsShop.Api.Container";
            builder.EntitySet<Product>("Product"); 
            return builder.GetEdmModel();
        }
    }
}
