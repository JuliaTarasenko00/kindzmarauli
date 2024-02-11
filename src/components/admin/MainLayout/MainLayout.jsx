import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../../Loader/Loader';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../../redux/auth/operation';

const LayoutAdmin = () => {
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <div>
          <button type="button" onClick={() => dispatch(userLogOut())}>
            Log Out
          </button>
        </div>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default LayoutAdmin;
