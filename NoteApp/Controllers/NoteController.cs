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
        [HttpGet, Route]
        public HttpResponseMessage ListNote()
        {
            var repository = new NoteRepository();
            var result = repository.ListNote();
            return Request.CreateListRecordsResponse(result);
        }

        [Route, HttpPost]
        public HttpResponseMessage AddNewNote(Note note)
        {
            var repository = new NoteRepository();
            var result = repository.AddNewNote(note);
            return Request.CreateAddRecordResponse(result);
        }
    }
}