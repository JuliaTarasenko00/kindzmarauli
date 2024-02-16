import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMenu } from '../../../redux/dishes/operation';
import { loading, listDishes } from '../../../redux/selector';
import { Section } from './MainPage.styled';
import { Loader } from '../../../components/Loader/Loader';
import { CreatedMarkup } from '../../../components/user/CreatedMarkup/CreatedMarkup';
import { HitDish } from '../../../components/user/HitDish/HitDish';

const data = {
  page: 1,
  limit: 12,
};

const MainPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loading);
  const popular = useSelector(listDishes);

  useEffect(() => {
    dispatch(getMenu(data));
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <HitDish />
          <Section>
            <CreatedMarkup title={'Popular Dishes'} dishes={popular} />
          </Section>
        </>
      )}
    </>
  );
};

export default MainPage;
