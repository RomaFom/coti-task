import React from "react";
import { LayoutMain } from "./StyledLayout";
import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <SideBar />
      <LayoutMain>
        <Outlet />
      </LayoutMain>
    </>
  );
};
export default Layout;
