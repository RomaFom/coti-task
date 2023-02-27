import React, { memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { getCountriesByFirstLetterSelector } from "../../redux/features/countries/countriesSlice";
import CountriesGrid from "../Grid/CountriesGrid";
import CountryCard from "../Cards/CountryCard";
import Button from "../Button";

const CountriesList: React.FC = () => {
  const { startsWith } = useParams();
  const filtredCountries = useAppSelector((state) =>
    getCountriesByFirstLetterSelector(state, startsWith || "")
  );
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <>
      <Button onClick={handleBack}>Back</Button>
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
export default memo(CountriesList);
