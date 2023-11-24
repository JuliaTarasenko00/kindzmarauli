import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./page/Home/Home'));
const MainDishesPage = lazy(() =>
  import('./page/MainDishesPage/MainDishesPage'),
);
const KhinkaliPage = lazy(() => import('./page/KhinkaliPage/KhinkaliPage'));
const GrilledDishesPage = lazy(() =>
  import('./page/GrilledDishesPage/GrilledDishesPage'),
);
const AppetizerPage = lazy(() => import('./page/AppetizerPage/AppetizerPage'));
const DessertsPage = lazy(() => import('./page/DessertsPage/DessertsPage'));
const DrinksPage = lazy(() => import('./page/DrinksPage/DrinksPage'));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hoot_dishes_khinkali" element={<KhinkaliPage />} />
          <Route path="/hoot_dishes_main" element={<MainDishesPage />} />
          <Route path="/hoot_dishes_grilled" element={<GrilledDishesPage />} />
          <Route path="/appetizer" element={<AppetizerPage />} />
          <Route path="/desserts" element={<DessertsPage />} />
          <Route path="/drinks" element={<DrinksPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
