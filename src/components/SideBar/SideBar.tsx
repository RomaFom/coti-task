import React, { useMemo, memo, useCallback } from "react";
import { Aside, NavButton, Nav } from "./StyledSideBar";
import { useAppSelector } from "../../hooks/reduxHooks";
import { getCountriesSelector } from "../../redux/features/countries/countriesSlice";
import { Link, useLocation } from "react-router-dom";
import { checkUniqueRoutes } from "../../utils/helpers";

const SideBar: React.FC = () => {
  const { data, isFetching } = useAppSelector(getCountriesSelector);
  const location = useLocation();

  const countriesDictionary = useMemo(() => {
    const keys = Object.keys(data);
    if (keys.length === 0) return [];
    return keys;
  }, [data]);

  const checkIfActiveRoute = useCallback(
    (testValue: string) => {
      // For the home route
      if (location.pathname === testValue) return true;

      // For ABC routes
      if (location.pathname.includes("/")) {
        const path = location.pathname.split("/")[1];
        if (path.length > 1) {
          return checkUniqueRoutes(path) === testValue;
        }
        return path === testValue;
      }
      return false;
    },
    [location.pathname]
  );

  return (
    <>
      <Aside>
        <Nav>
          <Link to={"/"}>
            <NavButton className={checkIfActiveRoute("/") ? "active" : ""}>
              Home
            </NavButton>
          </Link>
          {isFetching && <div>Loading...</div>}
          {!isFetching &&
            countriesDictionary.map((firstLetter) => (
              <Link
                key={`side-bar-nav-item-${firstLetter}`}
                to={`/${firstLetter}`}
              >
                <NavButton
                  className={checkIfActiveRoute(firstLetter) ? "active" : ""}
                >
                  {firstLetter}
                </NavButton>
              </Link>
            ))}
        </Nav>
      </Aside>
    </>
  );
};
export default memo(SideBar);
