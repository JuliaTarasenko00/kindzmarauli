import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { authorized, dishWithBasket, price } from '../../../redux/selector';
import { Container } from '../../../globalStyle';
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
import { dishPricing } from '../../../helpers/hooks/dishPricing';
import {
  addBasketDish,
  clearBasket,
  deleteBasketDish,
  minusBasketDish,
} from '../../../redux/basket/operationNotAuth';
import {
  clearAllDishAuth,
  deleteDishAuth,
  magnificationCountDishBasket,
  reductionCountDishBasket,
} from '../../../redux/basket/operation';
import { ModalComponent } from '../../Modal/Modal';
import { OrderForm } from './components/OrderForm';

export const BasketMarkup = ({ toggleModal, open }) => {
  const dishes = useSelector(dishWithBasket);
  const idBasket = useSelector((state) => state.basket.idBasket);
  const totalPrice = useSelector(price);
  const dispatch = useDispatch();
  const auth = useSelector(authorized);

  const onClickPlus = useCallback(
    (dish) => {
      const action = auth
        ? magnificationCountDishBasket(dish._id)
        : addBasketDish(dish);
      dispatch(action);
    },
    [auth, dispatch],
  );

  const onClickMinus = useCallback(
    (dish) => {
      const action = auth
        ? reductionCountDishBasket(dish._id)
        : minusBasketDish(dish);
      dispatch(action);
    },
    [auth, dispatch],
  );

  const onClickDeleteDish = useCallback(
    (id) => {
      if (window.confirm('Are you sure want to remove?')) {
        const action = auth ? deleteDishAuth(id) : deleteBasketDish(id);
        dispatch(action);
      }
    },
    [auth, dispatch],
  );

  const onClickRemoveOrders = useCallback(
    (id) => {
      if (
        window.confirm('Are you sure want to clear the entire recycle bin?')
      ) {
        const action = auth ? clearAllDishAuth(id) : clearBasket();
        dispatch(action);
      }
    },
    [auth, dispatch],
  );

  return (
    <>
      <Section>
        <Container>
          <>
            <>
              <WrapperName>
                <Title>Basket</Title>
                <ButtonRemoveBasket
                  type="button"
                  onClick={() => onClickRemoveOrders(idBasket)}
                >
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
                            disabled={dish.count === 1}
                            $datadisabled={(dish.count === 1).toString()}
                            className="minus"
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
                  <ButtonOrder type="button" onClick={() => toggleModal()}>
                    Place an order
                  </ButtonOrder>
                </div>
              </WrapperForm>
            </>
          </>
        </Container>
      </Section>
      {open && (
        <ModalComponent onClose={toggleModal}>
          <OrderForm id={idBasket} />
        </ModalComponent>
      )}
    </>
  );
};

BasketMarkup.propTypes = {
  toggleModal: PropTypes.func,
  open: PropTypes.bool,
};
