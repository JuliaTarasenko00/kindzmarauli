import { useNavigate } from 'react-router-dom';
import img from '../../assets/img/no_orders.png';
import {
  NoOrdersButton,
  NoOrdersDescription,
  NoOrdersImg,
  NoOrdersTitle,
} from '../../components/BasketMarkup/BasketMarkup.styled';

export const NoOrders = () => {
  const navigate = useNavigate();

  return (
    <section style={{ paddingBottom: 50 }}>
      <NoOrdersTitle>You shopping cart is empty</NoOrdersTitle>
      <NoOrdersDescription>
        You probably didn’t order any. To order a meal, go to the main page.
      </NoOrdersDescription>
      <NoOrdersImg src={img} alt="No orders" />
      <NoOrdersButton type="button" onClick={() => navigate('/')}>
        On tre main
      </NoOrdersButton>
    </section>
  );
};
