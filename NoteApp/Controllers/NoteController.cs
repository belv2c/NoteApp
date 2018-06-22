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

        [HttpGet, Route("{noteId}")]
        public HttpResponseMessage GetNote(int noteId)
        {
            var repo = new NoteRepository();
            var result = repo.GetNoteById(noteId);
            return Request.CreateListRecordsResponse(result);
        }

        [Route("{noteId}"), HttpPut]
        public HttpResponseMessage Update(Note note, int noteId)
        {
            note.NoteId = noteId;
            var repository = new NoteRepository();
            var result = repository.Update(note);
            return Request.CreateAddRecordResponse(result);
        }

        [HttpDelete, Route("{noteId}")]
        public HttpResponseMessage DeleteNote(int noteId)
        {
            var repo = new NoteRepository();
            var result = repo.DeleteNote(noteId);
            return Request.CreateUpdateRecordResponse(result);
        }


    }
}