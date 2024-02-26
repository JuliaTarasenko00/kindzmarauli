import { useEffect, useState } from 'react';
import { Container } from '../../globalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../../redux/dishes/operation';
import { listDishes, loading, totalPage } from '../../redux/selector';
import { MarkupComponent } from '../../components/admin/MarkupComponent/MarkupComponent';
import { Box, Pagination, styled } from '@mui/material';
import { LoaderForPage } from '../../components/LoaderForPage';

const CustomPagination = styled(Pagination)(() => ({
  '& .MuiPaginationItem-root': {
    color: '#ffffff',
    borderColor: '#ffffff',
  },
  '& .MuiPaginationItem-page.Mui-selected': {
    backgroundColor: '#0000ff2e',
  },
  '& .MuiPaginationItem-page:hover': {
    backgroundColor: '#0000ff2e',
  },
}));

const HomePage = () => {
  const dispatch = useDispatch();
  const list = useSelector(listDishes);
  const count = useSelector(totalPage);
  const isLoading = useSelector(loading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMenu({ page: page, limit: 8 }));
  }, [dispatch, page]);

  return (
    <section style={{ padding: '40px 0' }}>
      <Container>
        {isLoading && <LoaderForPage />}
        {!isLoading && (
          <>
            <MarkupComponent list={list} mainPage={true} />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '30px' }}>
              <CustomPagination
                count={count}
                size="large"
                page={page}
                onChange={(_, page) => setPage(page)}
              />
            </Box>
          </>
        )}
      </Container>
    </section>
  );
};

export default HomePage;
