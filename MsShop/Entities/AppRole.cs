﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MsShop.Entities
{
    [Table("AppRoles")]
    public class AppRole: IdentityRole
    {
        [StringLength(250)]
        public string Description { get; set; }
    }
}
