using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class StockPharmacyDto
    {
        public int Id { get; set; }
        public int IdPharmacy { get; set; }
        public int IdMedical { get; set; }
        public int Quentity { get; set; }
        public decimal Price { get; set; }

    }
}
