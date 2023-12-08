import { useDispatch, useSelector } from 'react-redux';
import { HitDish } from '../../components/HitDish/HitDish';
import { useEffect } from 'react';
import { getMenuPopular } from '../../redux/dishes/operation';
import { CreatedMarkup } from '../../components/CreatedMarkup/CreatedMarkup';
import { popularDishes } from '../../redux/selector';
import { Section } from './Home.styled';
import { Menu } from '../../components/Menu/Menu';

const Home = () => {
  const dispatch = useDispatch();
  const popular = useSelector(popularDishes);

  useEffect(() => {
    dispatch(getMenuPopular());
  }, [dispatch]);

  return (
    <>
      <HitDish />
      <Section>
        <CreatedMarkup title={'Popular Dishes'} dishes={popular} />
      </Section>
      <Menu />
    </>
  );
};

export default Home;
