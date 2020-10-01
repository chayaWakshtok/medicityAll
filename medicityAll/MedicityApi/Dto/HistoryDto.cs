using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class HistoryDto
    {
        public int Id { get; set; }
        public int MedicalId { get; set; }
        public bool Alert { get; set; }
        public bool IsSend { get; set; }

        public  MedicalDto Medical { get; set; }
    }
}
