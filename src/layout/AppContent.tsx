import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../routes';
import { Spinner } from '../components/Spinner';
import Page404 from '../pages/Page404';

const AppContent = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {Object.values(routes).map((route, idx) => {
            return route.element && <Route key={idx} path={route.path} element={<route.element />} />;
          })}
          {/*<Route path="/" element={<Navigate to="dashboard" replace />} />*/}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default React.memo(AppContent);
