import { useDispatch, useSelector } from 'react-redux';
import { HitDish } from '../../components/HitDish/HitDish';
import { useEffect } from 'react';
import { getMenuPopular } from '../../redux/dishes/operation';
import { CreatedMarkup } from '../../components/CreatedMarkup/CreatedMarkup';
import { filterDish, popularDishes } from '../../redux/selector';
import { Filter } from '../../components/Filter/Filter';
import { Section } from './Home.styled';
import { MenuSlider } from '../../components/MenuSlider/MenuSlider';

const Home = () => {
  const dispatch = useDispatch();
  const popular = useSelector(popularDishes);
  const filter = useSelector(filterDish);

  useEffect(() => {
    dispatch(getMenuPopular());
  }, [dispatch]);

  return (
    <>
      {filter && <Filter />}
      {!filter && (
        <>
          <HitDish />
          <Section>
            <CreatedMarkup title={'Popular Dishes'} dishes={popular} />
          </Section>
          <MenuSlider />
        </>
      )}
    </>
  );
};

export default Home;
