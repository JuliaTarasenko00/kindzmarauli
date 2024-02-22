import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../../redux/auth/operation';
import { dataUser } from '../../../redux/selector';
import { SideBar } from '../SideBar/SideBar';
import {
  Button,
  Main,
  Title,
  Wrapper,
  WrapperAdmin,
  WrapperMainLayout,
} from './MainLayout.styled';
import { FilterForm } from '../../FilterForm';
import { LoaderForPage } from '../../LoaderForPage';

const LayoutAdmin = () => {
  const dispatch = useDispatch();
  const data = useSelector(dataUser);

  return (
    <Wrapper>
      <SideBar />
      <Main>
        <WrapperMainLayout>
          <FilterForm />
          <WrapperAdmin>
            <Title>{data?.fullName}</Title>
            <Title>{data?.email}</Title>
            <Button type="button" onClick={() => dispatch(userLogOut())}>
              Log Out
            </Button>
          </WrapperAdmin>
        </WrapperMainLayout>
        <Suspense fallback={<LoaderForPage />}>
          <Outlet />
        </Suspense>
      </Main>
    </Wrapper>
  );
};

export default LayoutAdmin;
