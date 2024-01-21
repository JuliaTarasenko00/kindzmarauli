import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgb(116 115 115) 0%,
    rgb(83 81 81 / 32%) 0%
  );
  backdrop-filter: blur(0.1rem);
  z-index: 1200;
`;

export const Modal = styled.div`
  position: relative;
  background-color: #1f293a;
  border-radius: 30px;
  overflow: hidden;
  border: 2px solid #fbd13eb3;
  box-shadow: -1px 5px 65px 0px rgb(255 255 255 / 39%);
`;
