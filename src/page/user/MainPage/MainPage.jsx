import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMenuPopular } from '../../../redux/dishes/operation';
import { loading, popularDishes } from '../../../redux/selector';
import { Section } from './MainPage.styled';
import { Loader } from '../../../components/Loader/Loader';
import { CreatedMarkup } from '../../../components/user/CreatedMarkup/CreatedMarkup';
import { HitDish } from '../../../components/user/HitDish/HitDish';

const MainPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loading);
  const popular = useSelector(popularDishes);

  useEffect(() => {
    dispatch(getMenuPopular());
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
