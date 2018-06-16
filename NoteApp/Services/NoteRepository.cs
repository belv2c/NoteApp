using Dapper;
using NoteApp.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace NoteApp.Services
{
    public class NoteRepository
    {
        private static SqlConnection GetDb()
        {
            return new SqlConnection(ConfigurationManager.ConnectionStrings["notes_app"].ConnectionString);
        }

        public List<Note> ListNote()
        {
            using (var db = GetDb())
            {
                db.Open();
                var getAllNotes = db.Query<Note>(@"select * from dbo.Notes");
                return getAllNotes.ToList();
            }
        }

        public int AddNewNote(Note note)
        {
            using (var db = GetDb())
            {
                db.Open();

                var sql = @"INSERT INTO dbo.Notes
                            (title, notebody)
                            VALUES 
                            (@title, @notebody)";
                return db.Execute(sql, note);
            }
        }
    }
}