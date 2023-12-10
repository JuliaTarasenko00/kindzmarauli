import styled from 'styled-components';

export const Section = styled.section``;

export const Title = styled.h3`
  margin-bottom: 100px;
  color: var(--main-color);
  font-size: 80px;
  font-weight: 500;
  line-height: 1.12;
`;

export const List = styled.ul``;

export const Item = styled.li`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Img = styled.img`
  height: 180px;
  max-height: 100%;
  object-fit: cover;
`;

export const WrapperDish = styled.div`
  width: 240px;
`;

export const Name = styled.p`
  color: var(--main-color);
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 7px;
`;

export const Gram = styled.p`
  color: var(--main-color);
  padding: 2px 4px;
  background-color: gray;
  text-align: center;
  display: inline;
  border-radius: 2px;
`;

export const Price = styled.p`
  color: var(--main-color);
  font-size: 23px;
  font-weight: 800;
  line-height: normal;
`;

export const WrapperButton = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonCount = styled.button`
  cursor: pointer;
  color: var(--main-color);
  background-color: transparent;
  border: none;
`;

export const Count = styled.p`
  color: var(--main-color);
`;

export const Sum = styled.p`
  color: var(--main-color);
  font-size: 23px;
  font-weight: 800;
  line-height: normal;
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  color: #ff0000;
  background-color: transparent;
  border: 1px solid #ff0000;
  margin-right: 35px;
  padding: 4px;
  padding-bottom: 0;
`;

export const Total = styled.h4`
  color: var(--main-color);
`;
