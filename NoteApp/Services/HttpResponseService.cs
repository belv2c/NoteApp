using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;


namespace NoteApp.Services
{
    public static class HttpResponseService
    {
        private static HttpResponseMessage MapHttpResponse(this HttpRequestMessage message, DbResponseEnum dbResponse)
        {
            switch (dbResponse)
            {
                case DbResponseEnum.Created:
                    return message.CreateResponse(HttpStatusCode.Created);
                case DbResponseEnum.NotCreated:
                    return message.CreateErrorResponse(HttpStatusCode.InternalServerError, "The requested record could not be created, try again later");
                case DbResponseEnum.NotFound:
                    return message.CreateErrorResponse(HttpStatusCode.NotFound, "The record could not be found");
                case DbResponseEnum.Updated:
                    return message.CreateResponse(HttpStatusCode.OK);
                case DbResponseEnum.ValidationError:
                    return message.CreateErrorResponse(HttpStatusCode.BadRequest, "Validation error has occured, please check your data");
                default:
                    return message.CreateErrorResponse(HttpStatusCode.InternalServerError, "Not sure how we got here");
            }
        }

        private static HttpResponseMessage MapHttpResponse<T>(this HttpRequestMessage message, DbResponseEnum dbResponse, IEnumerable<T> records)
        {
            switch (dbResponse)
            {
                case DbResponseEnum.RecordsReturned:
                    return message.CreateResponse(HttpStatusCode.OK, records);
                case DbResponseEnum.NotFound:
                    return message.CreateErrorResponse(HttpStatusCode.NotFound, "No records found");
                default:
                    return message.CreateErrorResponse(HttpStatusCode.InternalServerError, "Not sure how we got here");
            }
        }

        public static HttpResponseMessage CreateAddRecordResponse(this HttpRequestMessage message, int dbResult)
        {
            return dbResult == 1 ? message.MapHttpResponse(DbResponseEnum.Created) : message.MapHttpResponse(DbResponseEnum.NotCreated);
        }

        public static HttpResponseMessage CreateUpdateRecordResponse(this HttpRequestMessage message, int dbResult)
        {
            if (dbResult > -1)
            {
                return dbResult == 1 ? message.MapHttpResponse(DbResponseEnum.Updated) : message.MapHttpResponse(DbResponseEnum.NotFound);
            }
            return message.MapHttpResponse(DbResponseEnum.ValidationError);
        }

        //List Response Not Found
        public static HttpResponseMessage CreateListRecordsResponse<T>(this HttpRequestMessage message, List<T> dbResult)
        {
            return (dbResult.Count >= 0) ? message.MapHttpResponse(DbResponseEnum.RecordsReturned, dbResult) : message.MapHttpResponse(DbResponseEnum.NotFound);
        }
    }
}