import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Loader } from './components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { dataUser, getToken } from './redux/selector';
import { userCurrent } from './redux/auth/operation';

const PrivateRoute = lazy(() =>
  import('./components/PrivateRoute/PrivateRoute'),
);

const Layout = lazy(() => import('./components/Layout/Layout'));
const MainPage = lazy(() => import('./page/MainPage/MainPage'));
const HotDishesPage = lazy(() => import('./page/HotDishesPage/HotDishesPage'));
const AppetizerPage = lazy(() => import('./page/AppetizerPage/AppetizerPage'));
const DessertsPage = lazy(() => import('./page/DessertsPage/DessertsPage'));
const DrinksPage = lazy(() => import('./page/DrinksPage/DrinksPage'));
const Basket = lazy(() => import('./page/Basket/Basket'));
const NotFound = lazy(() => import('./page/NotFound/NotFound'));
const Search = lazy(() => import('./components/Filter/Search'));
const UserAccount = lazy(() => import('./page/UserAccount/UserAccount'));

function App() {
  const token = useSelector(getToken);
  const user = useSelector(dataUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== '' && user === null) {
      dispatch(userCurrent());
    }
  }, [dispatch, token, user]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="hot_dishes" element={<HotDishesPage />} />
            <Route path="appetizer" element={<AppetizerPage />} />
            <Route path="desserts" element={<DessertsPage />} />
            <Route path="drinks" element={<DrinksPage />} />
            <Route path="basket" element={<Basket />} />
            <Route
              path="user_account"
              element={
                <PrivateRoute>
                  <UserAccount />
                </PrivateRoute>
              }
            />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
