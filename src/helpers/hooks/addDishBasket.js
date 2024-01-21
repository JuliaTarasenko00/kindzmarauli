import { useDispatch } from 'react-redux';
import { addBasketDish } from '../../redux/basket/operationNotAuth';

export const useAddDishBasket = (dishes) => {
  const dispatch = useDispatch();

  const addDishBasket = (id) => {
    const addedDish = dishes.find((dish) => dish._id === id);
    dispatch(addBasketDish(addedDish));
  };

  return addDishBasket;
};

export default useAddDishBasket;
