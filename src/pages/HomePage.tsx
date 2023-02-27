import React, { useCallback, useState } from "react";
import Search from "../components/Search";
import { useAppSelector } from "../hooks/reduxHooks";
import { searchMatchingCountriesSelector } from "../redux/features/countries/countriesSlice";
import CountriesList from "../components/CountriesList";

const HomePage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchValue = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const searchResults = useAppSelector((state) =>
    searchMatchingCountriesSelector(state, searchValue)
  );

  return (
    <>
      <h1>Welcome to COTI task you can search for countries here</h1>
      <Search
        onDebounceDone={handleChangeSearchValue}
        delay={500}
        placeholder={"Debounced Search"}
      />
      <CountriesList countries={searchResults} />
    </>
  );
};
export default HomePage;
