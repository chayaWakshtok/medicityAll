using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class PharmacyDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Telephone { get; set; }
        public int CityId { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public int NumHouse { get; set; }
        public decimal Lng { get; set; }
        public decimal Lat { get; set; }
        public string ImageUrl { get; set; }
        public int Star { get; set; }
        public double Far { get; set; }

        public  List<BusinessHourDto> BusinessHours { get; set; }
        public  CityDto City { get; set; }
        public  List<StockPharmacyDto> StockPharmacies { get; set; }

    }
}
