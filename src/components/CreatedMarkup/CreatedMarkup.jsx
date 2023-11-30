import { GrBasket } from 'react-icons/gr';
import { Container } from '../../globalStyle';
import {
  Button,
  Discount,
  DiscountedPrice,
  DishDescription,
  GramDish,
  Image,
  NameDish,
  PopularItem,
  PopularList,
  PopularWrapper,
  Prise,
  Title,
  WrapperPrice,
} from './CreatedMarkup.styled';

export const CreatedMarkup = (prop) => {
  const { title, dishes, titleHotDishes } = prop;

  return (
    <Container>
      {title && <Title>{title}</Title>}
      {titleHotDishes && <Title className="hot_dishes">{titleHotDishes}</Title>}
      <PopularList>
        {dishes.map((dish) => {
          const discount = dish.discounted ? Number(dish.discounted) : 0;
          const discountAmount = (dish.price * discount) / 100;
          const finalPrice = Math.floor(dish.price - discountAmount);

          return (
            <PopularItem key={dish.id}>
              {dish.discounted && <Discount>{dish.discounted}%</Discount>}
              <PopularWrapper>
                <Image
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  width="245"
                />
                <NameDish>{dish.name}</NameDish>
                <GramDish>{dish.gram}g</GramDish>
                <DishDescription>{dish.description}</DishDescription>
              </PopularWrapper>
              <WrapperPrice>
                <div>
                  {dish?.discounted && (
                    <DiscountedPrice>{dish.price}$</DiscountedPrice>
                  )}
                  <Prise>{finalPrice}$</Prise>
                </div>
                <Button type="button">
                  <GrBasket />
                </Button>
              </WrapperPrice>
            </PopularItem>
          );
        })}
      </PopularList>
    </Container>
  );
};
