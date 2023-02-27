import React from "react";
import CountriesList from "../components/CountriesList";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import {
  getCountriesByFirstLetterSelector,
  getCountriesSelector,
} from "../redux/features/countries/countriesSlice";

const CountriesByLetterPage: React.FC = () => {
  const { isFetching } = useAppSelector(getCountriesSelector);
  const { startsWith } = useParams();
  const filtredCountries = useAppSelector((state) =>
    getCountriesByFirstLetterSelector(state, startsWith || "")
  );

  if (isFetching) return <h1>Fetching Data From API..</h1>;

  return (
    <>
      {filtredCountries.length ? (
        <CountriesList countries={filtredCountries} />
      ) : (
        <h1>No countries found starts with {startsWith}</h1>
      )}
    </>
  );
};
export default CountriesByLetterPage;
