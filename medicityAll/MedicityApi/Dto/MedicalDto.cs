using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class MedicalDto
    {
        public int Id { get; set; }
        public string Code { get; set; }

        public  List<HistoryDto> Histories { get; set; }
        public  List<StockPharmacyDto> StockPharmacies { get; set; }
    }
}
