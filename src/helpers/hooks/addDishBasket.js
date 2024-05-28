import { useDispatch, useSelector } from 'react-redux';
import { addBasketDish } from '../../redux/basket/operationNotAuth';
import { authorized, dishWithBasket } from '../../redux/selector';
import {
  addDishBasketAuth,
  magnificationCountDishBasket,
} from '../../redux/basket/operation';

export const useAddDishBasket = (dishes) => {
  const dispatch = useDispatch();
  const auth = useSelector(authorized);
  const basket = useSelector(dishWithBasket);

  const addDishBasket = (id) => {
    const addedDish = dishes.find((dish) => dish._id === id);
    const dishBasket = basket.find((dish) => dish._id === id);

    if (!auth) {
      return dispatch(addBasketDish(addedDish));
    }

    if (auth && dishBasket) {
      return dispatch(magnificationCountDishBasket(dishBasket._id));
    }

    if (auth) {
      return dispatch(addDishBasketAuth(id));
    }
  };

  return addDishBasket;
};

export default useAddDishBasket;
