import { useSelector } from 'react-redux';
import { GrBasket } from 'react-icons/gr';
import { popularDishes } from '../../redux/selector';
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
  Prise,
  Title,
  WrapperPrice,
} from './PopularDishes.styled';

export const PopularDishes = () => {
  const popular = useSelector(popularDishes);

  return (
    <section>
      <Container>
        <Title>Popular Dishes</Title>
        <PopularList>
          {popular.map((dish) => {
            return (
              <PopularItem key={dish.id}>
                <Image
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  width="245"
                />
                <NameDish>{dish.name}</NameDish>
                <GramDish>{dish.weight}g</GramDish>
                <DishDescription>{dish.description}</DishDescription>
                {dish?.discountedPrice && (
                  <DiscountedPrice>{dish.discountedPrice}$</DiscountedPrice>
                )}
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
    </section>
  );
};
