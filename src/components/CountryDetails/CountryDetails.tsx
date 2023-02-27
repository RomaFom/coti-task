import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import {
  getCountriesSelector,
  getCountryByNameSelector,
} from "../../redux/features/countries/countriesSlice";
import DetailsCard from "../Cards/DetailsCard";

const CountryDetails: React.FC = () => {
  const { isFetching } = useAppSelector(getCountriesSelector);
  const { country: params } = useParams();
  const country = useAppSelector((state) =>
    getCountryByNameSelector(state, params || "")
  );

  if (isFetching) return <h1>Fetching Data From API..</h1>;

  return (
    <>
      {country ? (
        <DetailsCard country={country} />
      ) : (
        <h1>{params} Not found</h1>
      )}
    </>
  );
};
export default memo(CountryDetails);
