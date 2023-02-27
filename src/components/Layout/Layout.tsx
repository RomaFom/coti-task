import React, { useCallback } from "react";
import { LayoutMain } from "./StyledLayout";
import SideBar from "../SideBar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";

const Layout: React.FC = () => {
  const { startsWith: startsWithParam, country: countryParam } = useParams();
  const navigate = useNavigate();

  const handleClickBack = useCallback(() => {
    if (startsWithParam) {
      return navigate(`/`);
    }
    if (countryParam) {
      return navigate(`/${countryParam.charAt(0)}`);
    }
  }, [countryParam, startsWithParam]);

  return (
    <>
      <SideBar />
      <LayoutMain>
        {startsWithParam || countryParam ? (
          <Button onClick={handleClickBack}>Back</Button>
        ) : null}

        <Outlet />
      </LayoutMain>
    </>
  );
};
export default Layout;
