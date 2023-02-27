import React, { useCallback } from "react";
import CountriesList from "../components/CountriesList";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import {
  getCountriesByFirstLetterSelector,
  getCountriesSelector,
} from "../redux/features/countries/countriesSlice";
import Button from "../components/Button/Button";

const CountriesByLetterPage: React.FC = () => {
  const { isFetching } = useAppSelector(getCountriesSelector);
  const { startsWith } = useParams();
  const filtredCountries = useAppSelector((state) =>
    getCountriesByFirstLetterSelector(state, startsWith || "")
  );
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate("/");
  }, []);

  if (isFetching) return <h1>Loading...</h1>;

  return (
    <>
      <Button onClick={handleBack}>Back</Button>
      {filtredCountries.length ? (
        <CountriesList countries={filtredCountries} />
      ) : (
        <h1>No countries found starts with {startsWith}</h1>
      )}
    </>
  );
};
export default CountriesByLetterPage;
