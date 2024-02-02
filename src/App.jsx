import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Loader } from './components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { dataUser, getToken } from './redux/selector';
import { userCurrent } from './redux/auth/operation';
import AdminPrivateRoute from './components/PrivateRoute/AdiminPriveRoute';

const PrivateRoute = lazy(() =>
  import('./components/PrivateRoute/PrivateRoute'),
);
const AuthRout = lazy(() => import('./components/AuthRoute/AuthRoute'));

const Layout = lazy(() => import('./components/user/Layout/Layout'));
const Login = lazy(() => import('./page/user/AuthPage/LoginForm'));
const Register = lazy(() => import('./page/user/AuthPage/RegisterForm'));

//*user-----------

const MainPage = lazy(() => import('./page/user/MainPage/MainPage'));
const HotDishesPage = lazy(() =>
  import('./page/user/HotDishesPage/HotDishesPage'),
);
const AppetizerPage = lazy(() =>
  import('./page/user/AppetizerPage/AppetizerPage'),
);
const DessertsPage = lazy(() =>
  import('./page/user/DessertsPage/DessertsPage'),
);
const DrinksPage = lazy(() => import('./page/user/DrinksPage/DrinksPage'));
const Basket = lazy(() => import('./page/user/Basket/Basket'));
const NotFound = lazy(() => import('./page/NotFound/NotFound'));
const Search = lazy(() => import('./components/user/Filter/Search'));
const UserAccount = lazy(() => import('./page/user/UserAccount/UserAccount'));

//*admin
const LayoutAdmin = lazy(() => import('./components/admin/Layout'));

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
            <Route
              path="/login"
              element={
                <AuthRout>
                  <Login />
                </AuthRout>
              }
            />
            <Route
              path="/register"
              element={
                <AuthRout>
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
          </Route>
          <Route
            path="/admin"
            element={
              <AdminPrivateRoute redirectedTo="/login">
                <LayoutAdmin />
              </AdminPrivateRoute>
            }
          >
            <Route
              path="found"
              element={<p style={{ color: '#ffff' }}>Found</p>}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
