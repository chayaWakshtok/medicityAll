using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class UserDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Telphone { get; set; }
        public int Permision { get; set; }
        public int PharmacyId { get; set; }

        public  PharmacyDto Pharmacy { get; set; }
    }
}
