import { useEffect } from 'react';
import { Container } from '../../globalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMenu } from '../../redux/dishes/operation';
import { listDishes } from '../../redux/selector';
import { MarkupComponent } from '../../components/admin/MarkupComponent/MarkupComponent';

const HomePage = () => {
  const dispatch = useDispatch();
  const list = useSelector(listDishes);

  useEffect(() => {
    dispatch(getAllMenu());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <MarkupComponent list={list} />
      </Container>
    </section>
  );
};

export default HomePage;
