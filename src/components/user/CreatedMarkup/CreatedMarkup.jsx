import PropTypes from 'prop-types';
import { GrBasket } from 'react-icons/gr';
import { Container } from '../../../globalStyle';
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
  WrapperSection,
} from './CreatedMarkup.styled';
import useAddDishBasket from '../../../helpers/hooks/addDishBasket';
import { dishPricing } from '../../../helpers/hooks/dishPricing';

export const CreatedMarkup = (prop) => {
  const { title, dishes, titleDishes } = prop;
  const addDishBasket = useAddDishBasket(dishes);

  return (
    <Container>
      <WrapperSection $data_specificsPage={(!!titleDishes).toString()}>
        {title && <Title>{title}</Title>}
        {titleDishes && <Title className="specifics">{titleDishes}</Title>}
        <PopularList $data_specificsPage={(!!titleDishes).toString()}>
          {dishes?.map((dish) => {
            const { finalPrice } = dishPricing(dish);
            return (
              <PopularItem key={dish._id}>
                {dish?.discounted !== 0 && (
                  <Discount>{dish.discounted}%</Discount>
                )}
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
                    {dish.discounted !== 0 && (
                      <DiscountedPrice>{dish.price}$</DiscountedPrice>
                    )}
                    <Prise>{finalPrice}$</Prise>
                  </div>
                  <Button type="button" onClick={() => addDishBasket(dish._id)}>
                    <GrBasket />
                  </Button>
                </WrapperPrice>
              </PopularItem>
            );
          })}
        </PopularList>
      </WrapperSection>
    </Container>
  );
};

CreatedMarkup.propTypes = {
  title: PropTypes.string,
  titleHotDishes: PropTypes.string,
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      gram: PropTypes.number,
      specificsDish: PropTypes.object,
      image: PropTypes.string,
      _id: PropTypes.string,
    }),
  ).isRequired,
};
