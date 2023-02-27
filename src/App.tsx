import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { ERouteNames } from "./routes/routes";

const Home = React.lazy(() => import("./pages/HomePage"));
const CountriesByLetter = React.lazy(
  () => import("./pages/CountriesByLetterPage")
);
const CountryDetailPage = React.lazy(() => import("./pages/CountryDetailPage"));

const App: React.FC = () => {
  return (
    <div className="App">
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={ERouteNames.Home} element={<Layout />}>
            <Route index={true} element={<Home />} />
            <Route
              path={ERouteNames.StartsWith}
              element={<CountriesByLetter />}
            />
            <Route path={ERouteNames.Country} element={<CountryDetailPage />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;
