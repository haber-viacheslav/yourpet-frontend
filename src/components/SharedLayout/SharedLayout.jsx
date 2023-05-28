import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import PawLoader from '../../images/Loader.png';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader loaderSrc={PawLoader} size={250} />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
