import { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { EffectFlip, Navigation } from 'swiper/modules';
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
  Wrapper,
  SectionMobil,
  MobileItem,
} from './Menu.styled';

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

export const MenuSlider = () => {
  return (
    <>
      <SectionMobil>
        <Container>
          <Wrapper>
            <Title>Menu</Title>
          </Wrapper>
          <Swiper
            effect={'flip'}
            grabCursor={true}
            navigation={true}
            modules={[EffectFlip, Navigation]}
            className="mySwiper"
          >
            {options.map((option, index) => {
              return (
                <SwiperSlide key={option.name}>
                  {index === 0 ? (
                    <MobileItem
                      style={{
                        backgroundColor: '#B70000',
                      }}
                    >
                      <DiscountTitle>{option.first}</DiscountTitle>
                      <Navigate to={option.navig}>{option.name}🔥</Navigate>
                      <DiscountTitle className="discount_last">
                        {option.last}
                      </DiscountTitle>
                    </MobileItem>
                  ) : (
                    <MobileItem>
                      <ImgFirst
                        src={option.first}
                        alt={option.name}
                        width={150}
                        height={100}
                      />
                      <Navigate to={option.navig}>{option.name}</Navigate>
                      <ImgLast
                        src={option.last}
                        alt={option.name}
                        width={150}
                        height={100}
                      />
                    </MobileItem>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </SectionMobil>
      <Section>
        <Container>
          <Wrapper>
            <Title>Menu</Title>
          </Wrapper>
          <List>
            {options.map((option, index) => {
              return (
                <Fragment key={option.name}>
                  {index === 0 ? (
                    <Item
                      style={{
                        backgroundColor: '#B70000',
                      }}
                    >
                      <DiscountTitle>{option.first}</DiscountTitle>
                      <Navigate to={option.navig}>{option.name}🔥</Navigate>
                      <DiscountTitle className="discount_last">
                        {option.last}
                      </DiscountTitle>
                    </Item>
                  ) : (
                    <Item>
                      <ImgFirst
                        src={option.first}
                        alt={option.name}
                        width={150}
                        height={100}
                      />
                      <Navigate to={option.navig}>{option.name}</Navigate>
                      <ImgLast
                        src={option.last}
                        alt={option.name}
                        width={150}
                        height={100}
                      />
                    </Item>
                  )}
                </Fragment>
              );
            })}
          </List>
        </Container>
      </Section>
    </>
  );
};
