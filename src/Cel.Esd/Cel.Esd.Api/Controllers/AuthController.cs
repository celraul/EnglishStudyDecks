using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cel.Esd.Domain.Interfaces.Notifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Cel.Esd.Api.Controllers
{
    /// <summary>
    ///  Auth controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly INotificationHandler _notificationHandler;

        /// <summary>
        /// ctor
        /// </summary>
        public AuthController(INotificationHandler notificationHandler)
        {
            _notificationHandler = notificationHandler;
        }

        /// <summary>
        /// Do login
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost]
        [HttpPost("login")]
        public async Task<IActionResult> login()
        {
            return Ok();
        }

    }
}