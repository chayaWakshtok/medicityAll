using BL;
using Dto;
using System;
using System.Collections.Generic;
using System.Drawing.Drawing2D;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MedicityApi.Controllers
{
    public class CityController : ApiController
    {
        // GET: api/City
        public List<CityDto> Get()
        {
            return CityLogic.GetCities();
        }

        // GET: api/City/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/City
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/City/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/City/5
        public void Delete(int id)
        {
        }
    }
}
