import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./page/Home/Home'));
const HotDishesPage = lazy(() => import('./page/HotDishesPage/HotDishesPage'));
const AppetizerPage = lazy(() => import('./page/AppetizerPage/AppetizerPage'));
const DessertsPage = lazy(() => import('./page/DessertsPage/DessertsPage'));
const DrinksPage = lazy(() => import('./page/DrinksPage/DrinksPage'));
const Basket = lazy(() => import('./page/Basket/Basket'));
const HotFound = lazy(() => import('./page/HotFound/HotFound'));

function App() {
  return (
    <>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="hot_dishes" element={<HotDishesPage />} />
            <Route path="appetizer" element={<AppetizerPage />} />
            <Route path="desserts" element={<DessertsPage />} />
            <Route path="drinks" element={<DrinksPage />} />
            <Route path="basket" element={<Basket />} />
            <Route path="*" element={<HotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
