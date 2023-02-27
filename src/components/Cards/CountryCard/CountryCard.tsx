import React from "react";
import { ICountry } from "../../../types";
import {
  StyledCard,
  StyledCardContainer,
  StyledCardWrapper,
} from "./StyledCountryCard/StyledCountryCard";
import { Link } from "react-router-dom";

type Props = {
  country: ICountry;
};
const CountryCard: React.FC<Props> = ({ country }) => {
  return (
    <StyledCardWrapper>
      <Link to={`/country/${country.name}`}>
        <StyledCard>
          {country.flag}
          <StyledCardContainer>
            <h2>{country.name}</h2>
          </StyledCardContainer>
        </StyledCard>
      </Link>
    </StyledCardWrapper>
  );
};
export default CountryCard;
