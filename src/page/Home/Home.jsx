import { useDispatch } from 'react-redux';
import { HitDish } from '../../components/HitDish/HitDish';
import { PopularDishes } from '../../components/PopularDishes/PopularDishes';
import { useEffect } from 'react';
import { getMenuPopular } from '../../redux/operation';
import { Menu } from '../../components/Menu/Menu';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuPopular());
  }, [dispatch]);

  return (
    <>
      <HitDish />
      <PopularDishes />
      <Menu />
    </>
  );
};

export default Home;
