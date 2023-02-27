import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ICountry, ICountryMap } from "../../../types";
import lodash from "lodash";

interface CountriesState {
  data: ICountryMap;
  isFetching: boolean;
}

const initialState: CountriesState = {
  data: {},
  isFetching: false,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setFetchingCountriesStart: (state) => {
      // If state is empty set isFetching to true
      if (Object.keys(state.data).length === 0) {
        state.isFetching = true;
      }
    },
    setFetchingCountriesDone: (state) => {
      state.isFetching = false;
    },
    setCountries: (state, action: PayloadAction<ICountryMap>) => {
      // when state is empty, set all countries
      if (Object.keys(state.data).length === 0) {
        state.data = action.payload;
        return;
      }

      const newCountries = action.payload;
      const oldCountries = state.data;
      // when state is not empty, check if new data is equal to stored state data
      const isObjectsEqual = lodash.isEqual(newCountries, oldCountries);
      if (!isObjectsEqual) {
        state.data = newCountries;
        return;
      }
    },
  },
});

export const {
  setCountries,
  setFetchingCountriesStart,
  setFetchingCountriesDone,
} = countriesSlice.actions;

export const getCountriesSelector = (state: RootState) => {
  const { data, isFetching } = state.countries;
  return { data, isFetching };
};

// get countries by first letter
export const getCountriesByFirstLetterSelector = createSelector(
  [
    (state: RootState, firstLetter: string) =>
      state.countries.data[firstLetter],
  ],
  (countries) => {
    if (!countries) return [];
    return Object.values(countries);
  }
);

// get country by name
export const getCountryByNameSelector = createSelector(
  [
    (state: RootState, countryName: string) => {
      if (!countryName) return null;
      const firstLetter = countryName.charAt(0).toUpperCase();
      if (!state.countries.data[firstLetter]) return null;
      return state.countries.data[firstLetter][countryName];
    },
  ],
  (country) => country
);

// get countries by search value
export const searchMatchingCountriesSelector = createSelector(
  [
    (state: RootState, searchValue: string) => {
      if (!searchValue) return [] as Array<ICountry>;
      const firstLetter = searchValue.charAt(0).toUpperCase();
      if (!state.countries.data[firstLetter]) return [] as Array<ICountry>;
      const countries = Object.values(state.countries.data[firstLetter]);
      return countries.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    },
  ],
  (countries) => countries
);

export default countriesSlice.reducer;
