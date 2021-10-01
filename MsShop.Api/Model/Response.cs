using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MsShop.Api.Model
{
    public class Response
    {
        public string Message { get; set; }
        public object Data { get; set; }
        public string Token { get; set; }
        public Response(string message)
        {
            this.Message = message;
        }
        public Response(string message,string token)
        {
            this.Message = message;
            this.Token = token;
        }     
        public Response(string status, string message, object data)
        {
            this.Message = message;
            this.Data = data;
        }
    }
}
