import { useSelector } from 'react-redux';
import { dishWithBasket } from '../../../redux/selector';
import { NoOrders } from './NoOrders';
import { BasketMarkup } from '../../../components/user/BasketMarkup/BasketMarkup';

const Basket = () => {
  const dishes = useSelector(dishWithBasket);

  return (
    <>
      {dishes.length === 0 && <NoOrders />}
      {dishes.length > 0 && <BasketMarkup />}
    </>
  );
};

export default Basket;
