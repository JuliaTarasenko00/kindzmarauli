import { useSelector } from 'react-redux';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { dishWithBasket, price } from '../../redux/selector';
import { Container } from '../../globalStyle';
import {
  ButtonCount,
  ButtonDelete,
  Count,
  Gram,
  Img,
  Item,
  List,
  Name,
  Price,
  Section,
  Sum,
  Title,
  Total,
  WrapperButton,
  WrapperDish,
} from './BasketMarkup.styled';

export const BasketMarkup = () => {
  const dishes = useSelector(dishWithBasket);
  const totalPrice = useSelector(price);

  return (
    <Section>
      <Container>
        <Title>Basket</Title>
        <List>
          {dishes.map((dish) => (
            <Item key={dish.id}>
              <Img src={dish.image} alt={dish.name} width="195" />

              <WrapperDish>
                <Name>{dish.name}</Name>
                <Gram>{dish.gram}g</Gram>
              </WrapperDish>
              <Price>{dish.price}$</Price>
              <WrapperButton>
                <ButtonCount type="button">
                  <AiOutlineMinus />
                </ButtonCount>
                <Count>{dish.count}</Count>
                <ButtonCount type="button">
                  <AiOutlinePlus />
                </ButtonCount>
              </WrapperButton>
              <Sum>{dish.price * dish.count}$</Sum>
              <ButtonDelete type="button">
                <AiOutlineClose />
              </ButtonDelete>
            </Item>
          ))}
        </List>
        <Total>{totalPrice}</Total>
      </Container>
    </Section>
  );
};
