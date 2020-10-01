using AutoMapper;
using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.Convert
{
    public static class Converters
    {
        static Converters()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<UserDto, User>().ReverseMap();
                cfg.CreateMap<StockPharmacy, StockPharmacyDto>().ReverseMap();
                cfg.CreateMap<Pharmacy, PharmacyDto>().ReverseMap();
                cfg.CreateMap<Medical, MedicalDto>().ReverseMap();
                cfg.CreateMap<History, HistoryDto>().ReverseMap();
                cfg.CreateMap<City, CityDto>().ReverseMap();
                cfg.CreateMap<BusinessHour, BusinessHourDto>().ReverseMap();
            });
        }

        public static List<CityDto> Convert(List<City> entity)
        {
            return Mapper.Map<List<CityDto>>(entity);
        }
        public static List<City> Convert(List<CityDto> entity)
        {
            return Mapper.Map<List<City>>(entity);
        }

        public static List<Pharmacy> Convert(List<PharmacyDto> entity)
        {
            return Mapper.Map<List<Pharmacy>>(entity);
        }
        public static List<PharmacyDto> Convert(List<Pharmacy> entity)
        {
            return Mapper.Map<List<PharmacyDto>>(entity);
        }
    }
}
