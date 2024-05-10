import { useSelector } from 'react-redux';
import { dishWithBasket } from '../../../redux/selector';
import { NoOrders } from './NoOrders';
import { BasketMarkup } from '../../../components/user/BasketMarkup/BasketMarkup';
import { useModal } from '../../../helpers/hooks/useModal';

const Basket = () => {
  const dishes = useSelector(dishWithBasket);
  const { toggleModal, open } = useModal();

  return (
    <>
      {dishes.length === 0 && !open && <NoOrders />}
      {(dishes.length > 0 || open) && (
        <BasketMarkup toggleModal={toggleModal} open={open} />
      )}
    </>
  );
};

export default Basket;
