import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { getCountriesByFirstLetter } from "../../redux/features/countries/countriesSlice";

const CountriesList: React.FC = () => {
  const { startsWith } = useParams();
  const filtredCountries = useAppSelector((state) =>
    getCountriesByFirstLetter(state, startsWith || "")
  );

  return <>Starts with {startsWith}</>;
};
export default CountriesList;
