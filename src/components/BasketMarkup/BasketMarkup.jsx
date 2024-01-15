import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { dishWithBasket, price } from '../../redux/selector';
import { Container } from '../../globalStyle';
import {
  ButtonCount,
  ButtonDelete,
  ButtonOrder,
  ButtonRemoveBasket,
  Count,
  Gram,
  Img,
  Item,
  List,
  Name,
  Price,
  Section,
  Span,
  Sum,
  Title,
  Total,
  WrapperButton,
  WrapperDish,
  WrapperForm,
  WrapperInformation,
  WrapperName,
} from './BasketMarkup.styled';
import { FormPromoCode } from './components/FormPromoCode';
import { dishPricing } from '../../helpers/hooks/dishPricing';
import {
  addBasketDish,
  clearBasket,
  deleteBasketDish,
  minusBasketDish,
} from '../../redux/basket/slice';

export const BasketMarkup = () => {
  const dishes = useSelector(dishWithBasket);
  const totalPrice = useSelector(price);
  const dispatch = useDispatch();

  const onClickPlus = (dish) => {
    dispatch(addBasketDish(dish));
  };

  const onClickMinus = (dish) => {
    dispatch(minusBasketDish(dish));
  };

  const onClickDeleteDish = (id) => {
    if (window.confirm('Are you sure want to remove?')) {
      dispatch(deleteBasketDish(id));
    }
  };

  const onClickRemoveOrders = () => {
    if (window.confirm('Are you sure want to clear the entire recycle bin?')) {
      dispatch(clearBasket());
    }
  };

  return (
    <Section>
      <Container>
        <>
          <>
            <WrapperName>
              <Title>Basket</Title>
              <ButtonRemoveBasket type="button" onClick={onClickRemoveOrders}>
                Clear Basket
                <RiDeleteBin2Line />
              </ButtonRemoveBasket>
            </WrapperName>
            <List>
              {dishes.map((dish) => {
                const { finalPrice } = dishPricing(dish);
                return (
                  <Item key={dish._id}>
                    <Img src={dish.image} alt={dish.name} width="195" />
                    <WrapperInformation>
                      <WrapperDish>
                        <Name>{dish.name}</Name>
                        <Gram>{dish.gram}g</Gram>
                      </WrapperDish>
                      <Price>{finalPrice}$</Price>
                      <WrapperButton>
                        <ButtonCount
                          type="button"
                          onClick={() => onClickMinus(dish)}
                        >
                          <AiOutlineMinus />
                        </ButtonCount>
                        <Count>{dish.count}</Count>
                        <ButtonCount
                          type="button"
                          onClick={() => onClickPlus(dish)}
                        >
                          <AiOutlinePlus />
                        </ButtonCount>
                      </WrapperButton>
                      <Sum>{dish.total}$</Sum>
                      <ButtonDelete
                        type="button"
                        onClick={() => onClickDeleteDish(dish._id)}
                      >
                        <AiOutlineClose />
                      </ButtonDelete>
                    </WrapperInformation>
                  </Item>
                );
              })}
            </List>
            <WrapperForm>
              <div>
                <FormPromoCode />
                <Total>
                  <Span>Total for payment: </Span>
                  {totalPrice}$
                </Total>
                <ButtonOrder type="button">Place an order</ButtonOrder>
              </div>
            </WrapperForm>
          </>
        </>
      </Container>
    </Section>
  );
};
