import { useSelector } from 'react-redux';
import { CreatedMarkup } from '../CreatedMarkup/CreatedMarkup';
import { specificsDish } from '../../helpers/specifics_dish';
import { hotDishes } from '../../redux/selector';

export const MainDishesSection = () => {
  const allDishes = useSelector(hotDishes);
  const mainDishes = allDishes.filter(
    (dish) => dish.specificsDish === specificsDish.MAIN,
  );

  return <CreatedMarkup titleHotDishes={'Main Dishes'} dishes={mainDishes} />;
};
