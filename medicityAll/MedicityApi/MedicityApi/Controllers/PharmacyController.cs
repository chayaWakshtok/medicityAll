using BL;
using Dto;
using Dto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MedicityApi.Controllers
{
    [RoutePrefix("api/Pharmacy")]
    public class PharmacyController : ApiController
    {
        // GET: api/Pharmacy
        [Route("GetByName/{name}")]
        public List<PharmacyDto> GetByName(string name)
        {
            return PharmacyLogic.GetByName(name);
        }

        [HttpPost]
        [Route("GetByNear")]
        public List<PharmacyDto> GetByNear(LatLngModel latLngModel)
        {
            return PharmacyLogic.GetByNear(latLngModel.Lat, latLngModel.Lng,latLngModel.MedicineCode);
        }
        [Route("GetByCity/{id}")]
        public List<PharmacyDto> GetByCity(int id)
        {
            return PharmacyLogic.GetByCity(id);
        }
        // GET: api/Pharmacy/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Pharmacy
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Pharmacy/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Pharmacy/5
        public void Delete(int id)
        {
        }
    }
}
