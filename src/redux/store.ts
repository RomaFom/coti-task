import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { countriesSlice } from "./features/countries/countriesSlice";
import { watchForCountries } from "./sagas/sagas";
import { all } from "redux-saga/effects";
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    // Add your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

function* rootSaga() {
  yield all([watchForCountries()]);
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
