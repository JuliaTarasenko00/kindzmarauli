import styled, { keyframes } from 'styled-components';
import img from '../../assets/img/bg.png';

export const Section = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5000;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-color: #0f0f11;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center center;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: max-content;
`;

const title = keyframes`
50% {
    transform: scale(1.5) translateZ(10px);
}
50% {
    transform: scale(-2) translateZ(10px);
}
`;

export const Title = styled.p`
  color: var(--main-color);
  display: flex;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: center;
  animation: 3500ms ${title} infinite;

  & span {
    color: var(--active-color);
  }
`;
