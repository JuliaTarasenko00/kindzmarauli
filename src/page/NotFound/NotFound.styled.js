import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const WrapperDescription = styled.div`
  max-width: 450px;
`;

export const Title = styled.h3`
  color: var(--main-color);
  font-size: 50px;
  font-weight: 500;
  line-height: 1.12;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: var(--main-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: var(--active-color);
  display: flex;
  margin: 0 auto;
  border: none;
  align-items: center;
  gap: 10px;
  text-decoration: underline;
`;
