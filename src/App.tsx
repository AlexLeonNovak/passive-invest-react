import { lazy, Suspense } from 'react';

import { Loader } from './components/Loader';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/*<Route path={RouteList.LOGIN} element={<Login />} />*/}
          <Route
            path="*"
            element={
              <PrivateRoute>
                <DefaultLayout />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
