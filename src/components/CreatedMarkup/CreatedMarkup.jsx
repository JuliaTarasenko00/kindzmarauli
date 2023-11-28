import { GrBasket } from 'react-icons/gr';
import { Container } from '../../globalStyle';
import {
  Button,
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
          return (
            <PopularItem key={dish.id}>
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
                {dish?.discountedPrice && (
                  <DiscountedPrice>{dish.discountedPrice}$</DiscountedPrice>
                )}
              </PopularWrapper>
              <WrapperPrice>
                <Prise>{dish.price}$</Prise>
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
