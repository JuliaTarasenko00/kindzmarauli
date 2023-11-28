import { useDispatch, useSelector } from 'react-redux';
import { HitDish } from '../../components/HitDish/HitDish';
import { useEffect } from 'react';
import { getMenuPopular } from '../../redux/operation';
import { Menu } from '../../components/Menu/Menu';
import { CreatedMarkup } from '../../components/CreatedMarkup/CreatedMarkup';
import { popularDishes } from '../../redux/selector';

const Home = () => {
  const dispatch = useDispatch();
  const popular = useSelector(popularDishes);

  useEffect(() => {
    dispatch(getMenuPopular());
  }, [dispatch]);

  return (
    <>
      <HitDish />
      <section>
        <CreatedMarkup title={'Popular Dishes'} dishes={popular} />
      </section>
      <Menu />
    </>
  );
};

export default Home;
