using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MsShop.Api.Model;
using MsShop.Entities;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MsShop.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> userManager;
        private readonly IConfiguration configuration;

        public AccountController(UserManager<AppUser> userManager, IConfiguration configuration)
        {
            this.userManager = userManager;
            this.configuration = configuration;
        }
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Authenticate([FromBody] AccountLogin accountLogin)
        {
            if (!ModelState.IsValid)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
            var user = await userManager.FindByEmailAsync(accountLogin.Email);
            if (user == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Tài khoản không tồn tại");
            }
            if (!(await userManager.CheckPasswordAsync(user, accountLogin.Password)))
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Thông tin đăng nhập không đúng");
            }
            var userRoles = await userManager.GetRolesAsync(user);
            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };
            foreach (var userRole in userRoles)
            {
                authClaims.Add(new Claim(ClaimTypes.Role, userRole));
            }
            var jwtConfig = this.configuration.GetSection("JWT").Get<JsonWebTokenModel>();
            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtConfig.SecretKey));
            var token = new JwtSecurityToken(issuer: jwtConfig.ValidIssuer, audience: jwtConfig.ValidAudience,
                expires: DateTime.Now.AddHours(jwtConfig.ExpireTime), claims: authClaims, signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256));
            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo
            });
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
            var userExists = await userManager.FindByNameAsync(model.Email);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response("Tài khoản đã tồn tại"));
            AppUser user = new AppUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response("Lỗi tạo tài khoản vui lòng thử lại sau"));
            return Ok(new Response("Tạo tài khoản thành công"));
        }
    }
}
