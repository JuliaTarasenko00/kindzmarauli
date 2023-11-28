import { useSelector } from 'react-redux';
import { hotDishes } from '../../redux/selector';
import { specificsDish } from '../../helpers/specifics_dish';
import { CreatedMarkup } from '../CreatedMarkup/CreatedMarkup';

export const GrilledDishesSection = () => {
  const allDishes = useSelector(hotDishes);
  const grill = allDishes.filter(
    (dish) => dish.specificsDish === specificsDish.GRILLED,
  );

  return <CreatedMarkup titleHotDishes={'Grilled Dishes'} dishes={grill} />;
};
