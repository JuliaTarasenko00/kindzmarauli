import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

const LayoutAdmin = () => {
  const navigate = useNavigate();
  return (
    <>
      <p style={{ color: '#ffff' }}>Admin</p>
      <button type="button" onClick={() => navigate('/admin/found')}>
        found
      </button>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LayoutAdmin;
