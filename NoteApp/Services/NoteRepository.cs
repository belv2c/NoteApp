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

        public int AddNote(Note dto)
        {
            using (var db = GetDb())
            {
                db.Open();
                var sql = @"INSERT INTO dbo.Notes
                            (noteid, title, notebody, createdate)
                            VALUES 
                            (@noteid, @title, @notebody, @createdate)";
                return db.Execute(sql, dto);
            }
        }

        //public int Create(Note note)
        //{
        //    using (var db = GetDb())
        //    {
        //        db.Open();

        //        return db.Execute(@"INSERT INTO [dbo].[Notes]
        //					([Title]
        //					,[NoteBody]
        //					,[CreateDate])
        //				 VALUES
        //					(@Title 
        //					,@NoteBody 
        //					,@CreateDate)", note);

        //    }
        //}

        public List<Note> ListNote()
        {
            using (var db = GetDb())
            {
                db.Open();
                var getAllNotes = db.Query<Note>(@"select * from dbo.Notes");
                return getAllNotes.ToList();
            }
        }


    }
}