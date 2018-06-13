using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NoteApp.Services
{
    public enum DbResponseEnum
    {
        Created,
        NotCreated,
        RecordsReturned,
        Updated,
        NotFound,
        ValidationError,
        Success
    }
}
