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
                var getAllNotes = db.Query<Note>(@"select * from dbo.Note");
                return getAllNotes.ToList();
            }
        }

        //public int AddNewNote(Note note)
        //{
        //    using (var db = GetDb())
        //    {
        //        db.Open();

        //        var sql = @"INSERT INTO dbo.Note
        //                    (title, notebody)
        //                    VALUES 
        //                    (@title, @notebody)";
        //        return db.Execute(sql, note);
        //    }
        //}

        public int AddNote(Note dto)
        {
            using (var db = GetDb())
            {
                db.Open();
                var sql = @"INSERT INTO dbo.Notes
                            (noteid, title, notebody, isdeleted, createdate)
                            VALUES 
                            (@noteid, @title, @notebody, @isdeleted, @createdate)";
                return db.Execute(sql, dto);
            }
        }

    }
}