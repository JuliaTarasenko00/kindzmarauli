import { GrBasket } from 'react-icons/gr';
import { Container } from '../../globalStyle';
import designSmall from '../../assets/img/design_small.png';
import designBig from '../../assets/img/design_big.png';
import image from '../../assets/img/image.png';
import {
  Button,
  Description,
  DessertImg,
  DessertTitle,
  DishDetails,
  DishGram,
  Gram,
  ImgDesignBig,
  ImgDesignSmall,
  ImgDish,
  Link,
  NameDish,
  Prise,
  Section,
  Title,
  WrapperDessert,
  WrapperDish,
  WrapperInfo,
  WrapperPrice,
  WrapperSection,
} from './HitDish.styled';

export const HitDish = () => {
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
              src="https://www.thegrill.ee/wp-content/uploads/2022/03/bskwojx9nn8w.jpg"
              alt="Khachapuri in Adjara"
              width="1170"
              height="550"
              loading="lazy"
            />
            <DishDetails>
              <NameDish>Khachapuri in Adjara</NameDish>
              <Gram>250g</Gram>
              <Description>
                Khachapuri `Boat` stuffed with melted suluguni cheese, eggs and
                butter.
              </Description>
              <WrapperPrice>
                <Prise>45$</Prise>
                <Button type="button">
                  <GrBasket />
                </Button>
              </WrapperPrice>
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
