import PropTypes from 'prop-types';
import { MarkupComponent } from './MarkupComponent/MarkupComponent';
import styled from 'styled-components';

const Title = styled.p`
  color: var(--main-color);
  font-size: 20px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 20px;

  &.empty {
    color: var(--active-color);
    font-weight: 400;
  }
`;

export const RenderComponent = ({ specifics, title }) => {
  return (
    <>
      <Title>{title}</Title>
      {specifics.length > 0 ? (
        <MarkupComponent list={specifics} />
      ) : (
        <Title className="empty"> The list is empty</Title>
      )}
    </>
  );
};

RenderComponent.propTypes = {
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
