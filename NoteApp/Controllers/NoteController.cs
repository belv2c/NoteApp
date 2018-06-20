using NoteApp.Models;
using NoteApp.Services;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NoteApp.Controllers
{
    [RoutePrefix("api/notes")]
    public class DepartmentController : ApiController
    {
        [Route, HttpPost]
        public HttpResponseMessage AddNote(Note note)
        {
            var repository = new NoteRepository();
            var result = repository.AddNote(note);
            return Request.CreateAddRecordResponse(result);
        }

        [HttpGet, Route]
        public HttpResponseMessage ListNote()
        {
            var repository = new NoteRepository();
            var result = repository.ListNote();
            return Request.CreateListRecordsResponse(result);
        }

    }
}