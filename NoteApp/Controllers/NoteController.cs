using NoteApp.Models;
using NoteApp.Services;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OrientationAPI.Controllers
{
    [RoutePrefix("api/notes")]
    public class DepartmentController : ApiController
    {
        [HttpGet, Route]
        public HttpResponseMessage ListNote()
        {
            var repository = new NoteRepository();
            var result = repository.ListNote();
            return Request.CreateListRecordsResponse(result);
        }
    }
}