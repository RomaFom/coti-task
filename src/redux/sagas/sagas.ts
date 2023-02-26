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

async function getCountries() {
  const res: AxiosResponse<Array<ICountryResponse>> = await countriesApi.get(
    "/all"
  );
  const sortedCountries = sortCountries(res.data);
  return createCountryMap(sortedCountries);
}

function* fetchCountries() {
  try {
    // TODO: fix this error
    yield put(setFetchingCountriesStart());
    // @ts-ignore
    const countries = yield call(getCountries);
    yield put(setCountries(countries));
  } catch (error) {
    console.error("Failed to fetch countries", error);
  } finally {
    yield put(setFetchingCountriesDone());
  }
}

export function* watchForCountries() {
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
