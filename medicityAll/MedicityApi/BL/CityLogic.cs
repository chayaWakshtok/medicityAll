using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class CityLogic
    {
       public static medicityDBEntities db = new medicityDBEntities();

        public static List<CityDto> GetCities()
        {
            return Dto.Convert.Converters.Convert(db.Cities.ToList());
        }

        public static List<CityDto> GetCitiesByName(string name)
        {
            return Dto.Convert.Converters.Convert(db.Cities.Where(p=>p.Name.Contains(name)).ToList());
        }
    }
}
