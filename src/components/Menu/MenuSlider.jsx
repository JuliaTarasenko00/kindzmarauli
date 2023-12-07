import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { EffectFlip, Navigation } from 'swiper/modules';
import { Container } from '../../globalStyle';
import {
  DiscountTitle,
  ImgFirst,
  ImgLast,
  Navigate,
  Title,
  Wrapper,
  SectionMobil,
  MobileItem,
} from './Menu.styled';

export const MenuSlider = (props) => {
  const { options } = props;

  return (
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
  );
};

MenuSlider.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      first: PropTypes.string,
      last: PropTypes.string,
      navig: PropTypes.string,
    }),
  ).isRequired,
};
