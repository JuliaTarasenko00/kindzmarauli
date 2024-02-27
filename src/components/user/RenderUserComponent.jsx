import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CreatedMarkup } from './CreatedMarkup/CreatedMarkup';

const Title = styled.p`
  color: var(--main-color);
  width: 100%;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.12;
  text-align: center;
  text-transform: uppercase;

  &.empty {
    color: var(--active-color);
    text-transform: capitalize;
    margin-top: 20px;
    font-size: 20px;
  }
`;

export const RenderUserComponent = ({ specifics, title }) => {
  return (
    <>
      <Title>{title}</Title>
      {specifics.length > 0 ? (
        <CreatedMarkup dishes={specifics} />
      ) : (
        <Title className="empty"> The list is empty</Title>
      )}
    </>
  );
};

RenderUserComponent.propTypes = {
  specifics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      discounted: PropTypes.number,
      description: PropTypes.string,
      price: PropTypes.number,
      gram: PropTypes.number,
      specificsDish: PropTypes.object,
      image: PropTypes.string,
      _id: PropTypes.string,
    }),
  ).isRequired,
  title: PropTypes.string,
};
