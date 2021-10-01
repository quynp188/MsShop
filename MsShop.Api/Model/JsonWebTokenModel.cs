using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MsShop.Api.Model
{
    public class JsonWebTokenModel
    {
        public string SecretKey { get; set; }     
        public string ValidIssuer { get; set; }
        public string ValidAudience { get; set; }
        public double ExpireTime { get; set; }
    }
}
