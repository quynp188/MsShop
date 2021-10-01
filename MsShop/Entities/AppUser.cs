using Microsoft.AspNetCore.Identity;
using MsShop.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MsShop.Entities
{
    [Table("AppUsers")]
    public class AppUser: IdentityUser
    {
        [Required]
        public string FullName { get; set; }
        public string Avatar { get; set; }
        [Required]
        public string Adress { get; set; }
        public string DepartmentId { get; set; }
        public Gender Gender { get; set; }
        public DateTime? BirthDay { set; get; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateModified { get; set; }
    }
}
