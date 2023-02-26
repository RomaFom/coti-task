import React from "react";
import { useParams } from "react-router-dom";

const CountryDetails: React.FC = () => {
  const { country } = useParams();
  console.log(country);
  return <>CountryDetails</>;
};
export default CountryDetails;
