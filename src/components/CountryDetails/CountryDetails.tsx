import React, { memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import {
  getCountriesSelector,
  getCountryByNameSelector,
} from "../../redux/features/countries/countriesSlice";
import DetailsCard from "../Cards/DetailsCard";
import Button from "../Button";

const CountryDetails: React.FC = () => {
  const { isFetching } = useAppSelector(getCountriesSelector);
  const { country: params } = useParams();
  const country = useAppSelector((state) =>
    getCountryByNameSelector(state, params || "")
  );
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    const path = params ? `/${params[0]}` : "/";
    navigate(path);
  }, [params]);

  if (isFetching) return <h1>Loading...</h1>;

  return (
    <>
      <Button onClick={handleBack}>Back</Button>
      {country ? (
        <DetailsCard country={country} />
      ) : (
        <h1>{params} Not found</h1>
      )}
    </>
  );
};
export default memo(CountryDetails);
