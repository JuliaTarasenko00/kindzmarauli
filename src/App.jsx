import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Loader } from './components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { dataUser, dishWithBasket, getToken } from './redux/selector';
import { userCurrent } from './redux/auth/operation';
import { clearBasket } from './redux/basket/operationNotAuth';

const PrivateRoute = lazy(() =>
  import('./components/PrivateRoute/PrivateRoute'),
);
const AuthRout = lazy(() => import('./components/AuthRoute/AuthRoute'));

const Layout = lazy(() => import('./components/Layout/Layout'));
const Login = lazy(() => import('./page/AuthPage/LoginForm'));
const Register = lazy(() => import('./page/AuthPage/RegisterForm'));
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
  const basket = useSelector(dishWithBasket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== '' && user === null) {
      dispatch(userCurrent());
    }

    if (token !== '' && basket.length !== 0) {
      dispatch(clearBasket());
    }
  }, [basket.length, dispatch, token, user]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route
              path="/login"
              element={
                <AuthRout redirectedTo="/user_account">
                  <Login />
                </AuthRout>
              }
            />
            <Route
              path="/register"
              element={
                <AuthRout redirectedTo="/user_account">
                  <Register />
                </AuthRout>
              }
            />
            <Route path="hot_dishes" element={<HotDishesPage />} />
            <Route path="appetizer" element={<AppetizerPage />} />
            <Route path="desserts" element={<DessertsPage />} />
            <Route path="drinks" element={<DrinksPage />} />
            <Route path="basket" element={<Basket />} />
            <Route
              path="user_account"
              element={
                <PrivateRoute redirectedTo="/login">
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
