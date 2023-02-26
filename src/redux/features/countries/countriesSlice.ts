import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ICountryMap } from "../../../types";

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
      // when state is not empty, add new countries
      const newCountries = action.payload;
      const oldCountries = state.data;
      const countriesABC = Object.keys(newCountries);

      countriesABC.forEach((key) => {
        if (!oldCountries[key]) {
          oldCountries[key] = newCountries[key];
        } else {
          const newCountryNames = Object.values(newCountries[key]);
          newCountryNames.forEach((country) => {
            if (!oldCountries[key][country.name]) {
              oldCountries[key][country.name] = country;
            }
          });
        }
      });
    },
  },
});

export const {
  setCountries,
  setFetchingCountriesStart,
  setFetchingCountriesDone,
} = countriesSlice.actions;

export const getCountries = (state: RootState) => state.countries.data;

export default countriesSlice.reducer;
