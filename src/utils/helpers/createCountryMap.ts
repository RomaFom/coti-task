import { ICountryMap, ICountryResponse } from "../../types";

export const sortCountries = (
  countries: ICountryResponse[]
): ICountryResponse[] => {
  return countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
};
export const createCountryMap = (
  countries: ICountryResponse[]
): ICountryMap => {
  const countriesObject: ICountryMap = {};
  countries.forEach((country) => {
    const firstLetter = country.name.common[0];
    const countryName = country.name.common;
    if (!countriesObject[firstLetter]) {
      countriesObject[firstLetter] = {};
    }
    countriesObject[firstLetter][countryName] = {
      name: countryName,
      capital: country.capital?.[0] || null,
      population: country.population,
      cca2: country.cca2,
      flag: country.flag,
      flagUrl: country.flags.png,
    };
  });
  return countriesObject;
};
