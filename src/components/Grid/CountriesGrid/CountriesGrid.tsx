import React from "react";
import { StyledCountriesGrid } from "./StyledCountriesGrid";

type Props = {
  children: React.ReactNode;
};
const CountriesGrid: React.FC<Props> = ({ children }) => {
  return (
    <>
      <StyledCountriesGrid>{children}</StyledCountriesGrid>
    </>
  );
};
export default CountriesGrid;
