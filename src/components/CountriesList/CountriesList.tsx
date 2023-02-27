import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { getCountriesByFirstLetter } from "../../redux/features/countries/countriesSlice";
import CountriesGrid from "../Grid/CountriesGrid";
import CountryCard from "../CountryCard";

const CountriesList: React.FC = () => {
  const { startsWith } = useParams();
  const filtredCountries = useAppSelector((state) =>
    getCountriesByFirstLetter(state, startsWith || "")
  );

  return (
    <>
      <CountriesGrid>
        {filtredCountries.map((country) => (
          <CountryCard
            country={country}
            key={`country-card-item-${country.name}`}
          />
        ))}
      </CountriesGrid>
    </>
  );
};
export default CountriesList;
