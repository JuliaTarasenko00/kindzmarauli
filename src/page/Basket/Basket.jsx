import { useSelector } from 'react-redux';
import { BasketMarkup } from '../../components/BasketMarkup/BasketMarkup';
import { dishWithBasket } from '../../redux/selector';
import { NoOrders } from './NoOrders';

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
