import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./page/Home/Home'));
const HotDishesPage = lazy(() => import('./page/HotDishesPage/HotDishesPage'));
const AppetizerPage = lazy(() => import('./page/AppetizerPage/AppetizerPage'));
const DessertsPage = lazy(() => import('./page/DessertsPage/DessertsPage'));
const DrinksPage = lazy(() => import('./page/DrinksPage/DrinksPage'));
const Favorite = lazy(() => import('./page/Favorite/Favorite'));
const Basket = lazy(() => import('./page/Basket/Basket'));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hot_dishes" element={<HotDishesPage />} />
          <Route path="appetizer" element={<AppetizerPage />} />
          <Route path="desserts" element={<DessertsPage />} />
          <Route path="drinks" element={<DrinksPage />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="basket" element={<Basket />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
