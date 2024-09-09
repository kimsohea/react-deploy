import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer, MobileCategory } from "../HomeLayout";

import { Main } from "./RouteLayout.styled";

const RouteLayout = () => {
  const [activeCate, setActiveCate] = useState<boolean>(false);

  return (
    <>
      <Header />
      <MobileCategory isActive={activeCate} setIsActive={setActiveCate} />
      <Main className={activeCate ? "active" : ""}>
        <Outlet />
      </Main>
      <Footer className={activeCate ? "active" : ""} />
    </>
  );
};

export default RouteLayout;
