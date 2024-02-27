import PropTypes from 'prop-types';
import { CiCirclePlus } from 'react-icons/ci';
import styled from 'styled-components';
import { MarkupComponent } from './MarkupComponent/MarkupComponent';
import { Link, useLocation } from 'react-router-dom';

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

const Wrapper = styled.div`
  max-width: 240px;
  width: 100%;
  height: 240px;
  background-color: rgb(240 255 255);
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #fbd13e;
  margin-top: 20px;

  & p {
    color: #000;
    text-align: center;
    padding-top: 20px;
    font-weight: 500;
    font-size: 17px;
    line-height: 1;
  }

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    transition: transform var(--transition);

    & svg {
      display: block;
      color: #0ada0a;
      width: 80px;
      height: 80px;
      transition: color var(--transition);

      &:hover,
      :focus {
        color: green;
      }
    }

    &:hover,
    :focus {
      transform: scale(1.03) translateZ(10px);
    }
  }
`;

export const RenderComponent = ({ specifics, title, value }) => {
  const location = useLocation();

  return (
    <>
      <Title>{title}</Title>
      {specifics.length > 0 ? (
        <MarkupComponent list={specifics} />
      ) : (
        <Title className="empty"> The list is empty</Title>
      )}
      <Wrapper>
        <Link to={'/admin/add_newDish'} state={{ from: location, value }}>
          <p>Add new dish</p>
          <CiCirclePlus />
        </Link>
      </Wrapper>
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
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
