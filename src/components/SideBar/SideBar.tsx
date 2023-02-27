import React, { useMemo, memo } from "react";
import { Aside, NavButton, Nav } from "./StyledSideBar";
import { useAppSelector } from "../../hooks/reduxHooks";
import { getCountriesSelector } from "../../redux/features/countries/countriesSlice";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  const { data, isFetching } = useAppSelector(getCountriesSelector);

  const countriesDictionary = useMemo(() => {
    const keys = Object.keys(data);
    if (keys.length === 0) return [];
    return keys;
  }, [data]);

  return (
    <>
      <Aside>
        <Nav>
          <Link to={"/"}>
            <NavButton>Home</NavButton>
          </Link>
          {isFetching && <div>Loading...</div>}
          {!isFetching &&
            countriesDictionary.map((firstLetter) => (
              <Link
                key={`side-bar-nav-item-${firstLetter}`}
                to={`/${firstLetter}`}
              >
                <NavButton>{firstLetter}</NavButton>
              </Link>
            ))}
        </Nav>
      </Aside>
    </>
  );
};
export default memo(SideBar);
