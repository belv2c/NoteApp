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

        public int AddNote(Note note)
        {
            using (var db = GetDb())
            {
                db.Open();
                var sql = @"INSERT INTO dbo.Notee
                            (title, notebody, createdate)
                            VALUES 
                            (@title, @notebody, @createdate)";
                return db.Execute(sql, note);
            }
        }

        public List<Note> ListNote()
        {
            using (var db = GetDb())
            {
                db.Open();
                var getAllNotes = db.Query<Note>(@"select * from dbo.Notee");
                return getAllNotes.ToList();
            }
        }

        public List<Note> GetNoteById(int noteId)
        {
            using (var db = GetDb())
            {
                db.Open();
                var sql = "Select * From dbo.Notee WHERE noteId = @noteId";
                return db.Query<Note>(sql, new { noteId }).ToList();
            }
        }

        //internal int UpdateNote(Note note)
        //{
        //    using (var db = GetDb())
        //    {
        //        db.Open();
        //        var sql = @"UPDATE [dbo].[Notee]
        //                       SET [Title] = @title
        //                          ,[NoteBody] = @noteBody
        //                          ,[CreateDate] = @createDate";
        //        return db.Execute(sql, note);
        //    }
        //}

        //internal int DeleteNote(int noteId)
        //{
        //    using (var db = GetDb())
        //    {
        //        db.Open();
        //        var sql = @"DELETE FROM [dbo].[Notee]
        //                     WHERE NoteId = @NoteId";
        //        return db.Execute(sql, new { noteId });
        //    }
        //}


    }
}