using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace net.Controllers
{
    public class HomeController : Controller
    {
        public async Task Index()
        {
                Response.ContentType = "text/html";
               await Response.SendFileAsync( Path.Combine(Directory.GetCurrentDirectory(), "wwwroot","dist","index.html") );           
              
            
        }

    }
}
