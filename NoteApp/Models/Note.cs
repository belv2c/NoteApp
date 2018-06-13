using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NoteApp.Models
{
    public class Note
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string NoteBody { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}