using NoteApp.Models;
using NoteApp.Services;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NoteApp.Controllers
{
    [RoutePrefix("api/users")]
    public class UserController : ApiController
    {
        [HttpGet, Route]
        public HttpResponseMessage ListUser()
        {
            var repository = new UserRepository();
            var result = repository.ListUser();
            return Request.CreateListRecordsResponse(result);
        }
    }
}