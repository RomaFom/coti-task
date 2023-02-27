import React, { memo } from "react";
import CountriesGrid from "../Grid/CountriesGrid";
import CountryCard from "../Cards/CountryCard";
import { ICountry } from "../../types";
type Props = {
  countries: Array<ICountry>;
};
const CountriesList: React.FC<Props> = ({ countries }) => {
  return (
    <>
      <CountriesGrid>
        {countries.map((country) => (
          <CountryCard
            country={country}
            key={`country-card-item-${country.name}`}
          />
        ))}
      </CountriesGrid>
    </>
  );
};
export default memo(CountriesList);
