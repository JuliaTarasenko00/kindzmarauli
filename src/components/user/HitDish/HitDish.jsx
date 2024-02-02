import { useSelector } from 'react-redux';
import { GrBasket } from 'react-icons/gr';
import designSmall from '../../../assets/img/design_small.png';
import designBig from '../../../assets/img/design_big.png';
import image from '../../../assets/img/image.png';
import {
  Button,
  Description,
  DessertImg,
  DessertTitle,
  Discount,
  DishDetails,
  DishGram,
  Gram,
  ImgDesignBig,
  ImgDesignSmall,
  ImgDish,
  Link,
  NameDish,
  Prise,
  DiscountedPrice,
  Section,
  Title,
  WrapperDessert,
  WrapperDish,
  WrapperInfo,
  WrapperPrice,
  WrapperSection,
} from './HitDish.styled';
import { useEffect, useState } from 'react';
import useAddDishBasket from '../../../helpers/hooks/addDishBasket';
import { dishPricing } from '../../../helpers/hooks/dishPricing';
import { Container } from '../../../globalStyle';
import { popularDishes } from '../../../redux/selector';

export const HitDish = () => {
  const popular = useSelector(popularDishes);
  const [randomDish, setRandomDish] = useState(null);
  const addDishBasket = useAddDishBasket(Array(randomDish));
  const price = dishPricing(randomDish);

  useEffect(() => {
    const random = Math.floor(Math.random() * popular.length);
    return setRandomDish(popular[random]);
  }, [popular]);

  return (
    <Section>
      <Container>
        <WrapperSection>
          <WrapperInfo>
            <Title>
              Delivery from a hospitable restaurant of Georgian cuisine
            </Title>
            <ImgDesignSmall
              src={designSmall}
              alt="design"
              width="184"
              height="184"
              loading="lazy"
            />
            <Link href="tel:+38(099)900-00-00">+38(099)900-00-00</Link>
            <Link className="email" href="mailto:kindzmarauli@gmail.com">
              kindzmarauli@gmail.com
            </Link>
          </WrapperInfo>
          <WrapperDish>
            <ImgDish
              src={randomDish?.image}
              alt={randomDish?.name}
              width="600"
              height="550"
              loading="lazy"
            />
            {randomDish?.discounted !== 0 && (
              <Discount>{randomDish?.discounted}%</Discount>
            )}

            <DishDetails>
              <div>
                <NameDish>{randomDish?.name}</NameDish>
                <Gram>{randomDish?.gram}</Gram>
                <Description>{randomDish?.description}</Description>
                <WrapperPrice>
                  <div>
                    {randomDish?.discounted !== 0 && (
                      <DiscountedPrice>{randomDish?.price}$</DiscountedPrice>
                    )}
                    <Prise>{price?.finalPrice}$</Prise>
                  </div>
                  <Button
                    type="button"
                    onClick={() => addDishBasket(randomDish?._id)}
                  >
                    <GrBasket />
                  </Button>
                </WrapperPrice>
              </div>
            </DishDetails>
            <ImgDesignBig
              src={designBig}
              alt="design"
              width="364"
              height="364"
              loading="lazy"
            />
          </WrapperDish>
        </WrapperSection>
        <WrapperDessert>
          <DessertImg src={image} alt="dessert" loading="lazy" width="200" />
          <DessertTitle>Tiramisu</DessertTitle>
          <DishGram>350g</DishGram>
          <WrapperPrice>
            <Prise>30$</Prise>
            <Button type="button">
              <GrBasket />
            </Button>
          </WrapperPrice>
        </WrapperDessert>
      </Container>
    </Section>
  );
};
