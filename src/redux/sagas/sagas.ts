import { call, put, takeEvery } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import {
  setCountries,
  setFetchingCountriesDone,
  setFetchingCountriesStart,
} from "../features/countries/countriesSlice";
import { countriesApi } from "../../utils/apiCaller";
import { AxiosResponse } from "axios";
import { ICountryResponse } from "../../types";
import { createCountryMap, sortCountries } from "../../utils/helpers";

async function countriesFetcher() {
  const res: AxiosResponse<Array<ICountryResponse>> = await countriesApi.get(
    "/all"
  );
  const sortedCountries = sortCountries(res.data);
  return createCountryMap(sortedCountries);
}

function* fetchCountries(): any {
  try {
    yield put(setFetchingCountriesStart());
    const countries = yield call(countriesFetcher);
    yield put(setCountries(countries));
  } catch (error) {
    console.error("Failed to fetch countries", error);
  } finally {
    yield put(setFetchingCountriesDone());
  }
}

export function* watchForCountries() {
  // Fetch countries on app start without waiting for 5 seconds
  yield call(fetchCountries);

  const channel = eventChannel((emit) => {
    const intervalId = setInterval(() => {
      emit("tick");
    }, 5000);
    return () => clearInterval(intervalId);
  });

  yield takeEvery(channel, function* () {
    yield call(fetchCountries);
  });
}
