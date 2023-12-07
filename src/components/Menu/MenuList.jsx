import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Container } from '../../globalStyle';
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
} from './Menu.styled';

export const MenuList = (props) => {
  const { options } = props;

  return (
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
  );
};

MenuList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      first: PropTypes.string,
      last: PropTypes.string,
      navig: PropTypes.string,
    }),
  ).isRequired,
};
