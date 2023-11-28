import { useSelector } from 'react-redux';
import { hotDishes } from '../../redux/selector';
import { specificsDish } from '../../helpers/specifics_dish';
import { CreatedMarkup } from '../CreatedMarkup/CreatedMarkup';

export const KhinkaliSection = () => {
  const allDishes = useSelector(hotDishes);
  const khinkali = allDishes.filter(
    (dish) => dish.specificsDish === specificsDish.KHINKALI,
  );

  return <CreatedMarkup titleHotDishes={'Khinkali'} dishes={khinkali} />;
};
