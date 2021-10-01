using MsShop.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MsShop.Api.Model
{
    public class RegisterModel
    {
        [Required]
        public string FullName { get; set; }
        public string Avatar { get; set; }
        [Required]
        public string Adress { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string DepartmentId { get; set; }
        public Gender Gender { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? BirthDay { set; get; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateModified { get; set; }
    }
}
