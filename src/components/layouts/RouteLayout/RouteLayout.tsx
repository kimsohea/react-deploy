import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../HomeLayout';

import { Main } from './RouteLayout.styled';

const RouteLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default RouteLayout;
