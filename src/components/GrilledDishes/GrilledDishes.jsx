import { useSelector } from 'react-redux';
import { allDishes } from '../../redux/selector';
import { specificsDish } from '../../helpers/specifics_dish';
import { CreatedMarkup } from '../CreatedMarkup/CreatedMarkup';

export const GrilledDishesSection = () => {
  const allDish = useSelector(allDishes);
  const grill = allDish.filter(
    (dish) => dish.specificsDish === specificsDish.GRILLED,
  );

  return <CreatedMarkup titleDishes={'Grilled Dishes'} dishes={grill} />;
};
