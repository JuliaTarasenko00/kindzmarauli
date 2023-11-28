import { Fragment } from 'react';
import { Container } from '../../globalStyle';
import imageHot from '../../assets/img/image_17.png';
import imageHotDishes from '../../assets/img/image_18.png';
import imgSoups from '../../assets/img/image_19.png';
import imgSoup from '../../assets/img/image_20.png';
import imgKhinkali from '../../assets/img/image_21.png';
import imgKhinkalis from '../../assets/img/image_22.png';
import imgSalad from '../../assets/img/image_23.png';
import imgSalads from '../../assets/img/image_24.png';
import imgColdS from '../../assets/img/image_25.png';
import imgCold from '../../assets/img/image_26.png';
import {
  DiscountTitle,
  ImgFirst,
  ImgLast,
  Item,
  Navigate,
  List,
  Section,
  Title,
} from './Menu.styled';

export const Menu = () => {
  const options = [
    { name: 'Discount', first: '20%', last: '30%' },
    {
      name: 'Hot Dishes',
      first: imageHotDishes,
      last: imageHot,
      navig: '/hot_dishes',
    },
    { name: 'Soups', first: imgSoup, last: imgSoups },
    { name: 'Khinkali', first: imgKhinkali, last: imgKhinkalis },
    { name: 'Cold Snacks', first: imgCold, last: imgColdS },
    { name: 'Salads', first: imgSalad, last: imgSalads },
  ];

  return (
    <Section>
      <Container>
        <Title>Menu</Title>
        <List>
          {options.map((option, index) => {
            return (
              <Fragment key={option.name}>
                {index === 0 ? (
                  <Item style={{ backgroundColor: '#B70000' }}>
                    <DiscountTitle>{option.first}</DiscountTitle>
                    <Navigate to={option.navig}>{option.name}🔥</Navigate>
                    <DiscountTitle className="discount_last">
                      {option.last}
                    </DiscountTitle>
                  </Item>
                ) : (
                  <Item>
                    <ImgFirst src={option.first} alt={option.name} />
                    <Navigate to={option.navig}>{option.name}</Navigate>
                    <ImgLast src={option.last} alt={option.name} />
                  </Item>
                )}
              </Fragment>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};
