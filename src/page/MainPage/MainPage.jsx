import { useDispatch, useSelector } from 'react-redux';
import { HitDish } from '../../components/HitDish/HitDish';
import { useEffect } from 'react';
import { getMenuPopular } from '../../redux/dishes/operation';
import { CreatedMarkup } from '../../components/CreatedMarkup/CreatedMarkup';
import { loading, popularDishes } from '../../redux/selector';
import { Section } from './MainPage.styled';
import { Menu } from '../../components/Menu/Menu';
import { Loader } from '../../components/Loader/Loader';

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
          <Menu />
        </>
      )}
    </>
  );
};

export default MainPage;
