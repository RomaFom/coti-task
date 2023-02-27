import React, { memo } from "react";
import { ICountry } from "../../../types";
import { StyledCardContent, StyledCardWrapper } from "./StyledDetailsCard";

type Props = {
  country: ICountry;
};
const DetailsCard: React.FC<Props> = ({ country }) => {
  return (
    <>
      <StyledCardWrapper>
        <img src={country.flagUrl} alt={country.name} />
        <StyledCardContent>
          <h2>Welcome to {country.name}</h2>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Alpha2Code: {country.cca2}</p>
          <a
            href={`https://en.wikipedia.org/wiki/${country.name}`}
            target={"_blank"}
            rel="noreferrer"
          >
            Read Wiki
          </a>
        </StyledCardContent>
      </StyledCardWrapper>
    </>
  );
};
export default memo(DetailsCard);
