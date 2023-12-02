import { useSelector } from 'react-redux';
import { CreatedMarkup } from '../CreatedMarkup/CreatedMarkup';
import { specificsDish } from '../../helpers/specifics_dish';
import { allDishes } from '../../redux/selector';

export const MainDishesSection = () => {
  const allDish = useSelector(allDishes);
  const mainDishes = allDish.filter(
    (dish) => dish.specificsDish === specificsDish.MAIN,
  );

  return <CreatedMarkup titleHotDishes={'Main Dishes'} dishes={mainDishes} />;
};
