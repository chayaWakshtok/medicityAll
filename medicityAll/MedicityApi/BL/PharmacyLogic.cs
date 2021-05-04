using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Device.Location;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class PharmacyLogic
    {
        public static medicityDBEntities db = new medicityDBEntities();
        public static List<PharmacyDto> GetByName(string name)
        {
            return Dto.Convert.Converters.Convert(db.Pharmacies.Where(p=>p.Name.Contains(name)==true).ToList());
        }

        public static List<PharmacyDto> GetByCity(int id)
        {
            return Dto.Convert.Converters.Convert(db.Pharmacies.Where(p => p.CityId==id).ToList());
        }

        public static List<PharmacyDto> GetByNear(double lat,double lng,string medicineCode)
        {
            var list = Dto.Convert.Converters.Convert(db.Pharmacies.ToList());
            List<PharmacyDto> nearList = new List<PharmacyDto>();

            foreach (var item in list)
            {
                var medicine = db.Medicals.FirstOrDefault(p => p.Code == medicineCode);
                if (medicine == null)
                    continue;

                var stock = item.StockPharmacies.FirstOrDefault(p => p.IdMedical == medicine.Id);
                if (stock == null)
                    continue;


                double latB =(double)item.Lat;
                double longB = (double)item.Lng;
                var locA = new GeoCoordinate(lat, lng);
                var locB = new GeoCoordinate(latB, longB);
                double distance = locA.GetDistanceTo(locB);
                item.Far = distance;
               
                if (distance < 120000 && medicine!=null&&stock.Quentity>0)
                    nearList.Add(item);
            }
            return nearList;
        }
    }
}
