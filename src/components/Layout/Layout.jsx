import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Toaster } from 'react-hot-toast';
import { Paper } from '@mui/material';
import { AppFooter } from 'components/AppFooter/AppFooter';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Paper square>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <main>
          <section>
            <Outlet />
          </section>
        </main>
      </Suspense>
      <Toaster />
      <AppFooter />
    </Paper>
  );
};
