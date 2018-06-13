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
    public class UserRepository
    {
        private static SqlConnection GetDb()
        {
            return new SqlConnection(ConfigurationManager.ConnectionStrings["notes_app"].ConnectionString);
        }

        public List<User> ListUser()
        {
            using (var db = GetDb())
            {
                db.Open();
                var getAllUsers = db.Query<User>(@"select * from dbo.Users");
                return getAllUsers.ToList();
            }
        }
    }
}