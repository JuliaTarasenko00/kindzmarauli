import { useDispatch, useSelector } from 'react-redux';
import { addBasketDish } from '../../redux/basket/operationNotAuth';
import { authentication, dishWithBasket } from '../../redux/selector';
import {
  addDishBasketAuth,
  magnificationCountDishBasket,
} from '../../redux/basket/operation';

export const useAddDishBasket = (dishes) => {
  const dispatch = useDispatch();
  const auth = useSelector(authentication);
  const basket = useSelector(dishWithBasket);

  const addDishBasket = (id) => {
    const addedDish = dishes.find((dish) => dish._id === id);
    const dishBasket = basket.find((dish) => dish.idProduct === id);

    const dish = {
      idProduct: addedDish._id,
      image: addedDish.image,
      name: addedDish.name,
      price: addedDish.price,
      discounted: addedDish.discounted,
      gram: addedDish.gram,
    };

    if (!auth) {
      return dispatch(addBasketDish(addedDish));
    }

    if (auth && dishBasket) {
      return dispatch(magnificationCountDishBasket(dishBasket._id));
    }

    if (auth) {
      return dispatch(addDishBasketAuth(dish));
    }
  };

  return addDishBasket;
};

export default useAddDishBasket;
