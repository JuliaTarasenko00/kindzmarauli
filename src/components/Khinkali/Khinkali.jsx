import { useSelector } from 'react-redux';
import { allDishes } from '../../redux/selector';
import { specificsDish } from '../../helpers/specifics_dish';
import { CreatedMarkup } from '../CreatedMarkup/CreatedMarkup';

export const KhinkaliSection = () => {
  const allDish = useSelector(allDishes);
  const khinkali = allDish.filter(
    (dish) => dish.specificsDish === specificsDish.KHINKALI,
  );

  return <CreatedMarkup titleHotDishes={'Khinkali'} dishes={khinkali} />;
};
