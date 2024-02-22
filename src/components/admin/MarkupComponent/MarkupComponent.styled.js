import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  color: var(--main-color);
  font-size: 20px;
  line-height: 1;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ ['$positionContent']: content }) =>
    content === 'true' ? 'start' : 'center'};
  gap: 20px;
`;

export const Item = styled.li`
  max-width: 240px;
  display: flex;
  flex-direction: column;
  background-color: rgb(240 255 255);
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #fbd13e;
`;

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 150px);
`;

export const WrapperDescription = styled.div`
  flex-grow: 1;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 150px;
`;

export const NameDish = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--main-color-dark);
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: var(--main-color-dark);
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  opacity: 0.8;
  margin-bottom: 10px;
`;

export const Gram = styled.p`
  width: max-content;
  padding: 5px;
  background-color: gray;
  border-radius: 5px;
  color: var(--main-color);
  margin-bottom: 15px;
`;

export const WrapperPrice = styled.div`
  width: 100%;
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 1;
  color: var(--main-color-dark);
`;

export const OldPrice = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 1;
  opacity: 0.8;
  color: gray;

  &:not(:first-child) {
    margin-bottom: 10px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonChange = styled(Link)`
  cursor: pointer;
  display: block;
  background-color: var(--active-color);
  border: none;
  color: var(--main-color-dark);
  max-width: 84px;
  padding: 10px;
  border-radius: 41px;
  font-weight: 500;
  font-size: 15px;
  line-height: 1;
  transition: color var(--transition), background-color var(--transition);

  &:hover,
  :focus {
    color: var(--button-basket-background-active);
    background-color: #000;
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  display: block;
  background-color: transparent;
  border: none;
  color: red;
  max-width: 84px;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: #4f0f0f;
  }

  & svg {
    width: 30px;
    height: 30px;
  }
`;
