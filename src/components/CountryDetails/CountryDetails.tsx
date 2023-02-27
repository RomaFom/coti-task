import React, { memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { getCountryByNameSelector } from "../../redux/features/countries/countriesSlice";
import DetailsCard from "../Cards/DetailsCard";
import Button from "../Button";

const CountryDetails: React.FC = () => {
  const { country: params } = useParams();
  const country = useAppSelector((state) =>
    getCountryByNameSelector(state, params || "")
  );
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    const path = params ? `/${params[0]}` : "/";
    navigate(path);
  }, [params]);

  return (
    <>
      <Button onClick={handleBack}>Back</Button>
      {country && <DetailsCard country={country} />}
    </>
  );
};
export default memo(CountryDetails);
