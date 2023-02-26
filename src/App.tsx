import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { ERouteNames } from "./routes/routes";
import HomePage from "./pages/HomePage";
import CountriesByLetterPage from "./pages/CountriesByLetterPage";
import CountryDetailPage from "./pages/CountryDetailPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={ERouteNames.Home} element={<Layout />}>
          <Route index={true} element={<HomePage />} />
          <Route
            path={ERouteNames.StartsWith}
            element={<CountriesByLetterPage />}
          />
          <Route path={ERouteNames.Country} element={<CountryDetailPage />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
