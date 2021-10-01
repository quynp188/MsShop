using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MsShop.Entities
{
    [Table("ProductOrigins")]
    public class ProductOrigin
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int OriginId { set; get; }

        [ForeignKey("ProductId")]
        public virtual Product Product { set; get; }

        [ForeignKey("OriginId")]
        public virtual Origin Origin { set; get; }
    }
}
