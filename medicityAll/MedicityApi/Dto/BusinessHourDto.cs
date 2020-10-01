using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class BusinessHourDto
    {
        public int Id { get; set; }
        public int NumDay { get; set; }
        public System.TimeSpan OpenTime { get; set; }
        public System.TimeSpan CloseTime { get; set; }
        public int PharmacyId { get; set; }

    }
}
