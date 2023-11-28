import 'modern-normalize/modern-normalize.css';

import styled, { createGlobalStyle } from 'styled-components';
import img from './assets/img/bg.png';

import MontserratBlack from './assets/fonts/Montserrat-Black.ttf';
import MontserratExtraBold from './assets/fonts/Montserrat-ExtraBold.ttf';
import MontserratBold from './assets/fonts/Montserrat-Bold.ttf';
import MontserratExtraLight from './assets/fonts/Montserrat-ExtraLight.ttf';
import MontserratLight from './assets/fonts/Montserrat-Light.ttf';
import MontserratMedium from './assets/fonts/Montserrat-Medium.ttf';
import MontserratRegular from './assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from './assets/fonts/Montserrat-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`

:root {
  --main-color: #fff;
  --main-color-dark: #000;
  --active-color: #fbd13e;
  --transition: 250ms ease-in-out;
  --button-basket-background: #ffcf00;
  --button-basket-background-active: #ffb200d6;
  --button-basket-color-active: #262626;
  --gram-background: #80808094;
}

body{
  margin: 0;
  font-family: 'Montserrat',sans-serif;
  background-color: #0F0F11;

}

p,
h1,
h2,
h3,
h4 {
  margin: 0;
}

ul {
  margin: 0;
  padding-left: 0;

  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a{
  text-decoration: none;
}

button{
  padding: 0;
}

#root{
    min-height: 100vh; 
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 1350px;
    display: flex;
    flex-direction: column;
}


  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-Black'),
         url(${MontserratBlack}) format('truetype');
    font-weight: 900; 
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-ExtraBold'),
         url(${MontserratExtraBold}) format('truetype');
    font-weight: 800; 
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-Bold'),
         url(${MontserratBold}) format('truetype');
    font-weight: 700; 
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-SemiBold'),
         url(${MontserratSemiBold}) format('truetype');
    font-weight: 600; 
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-Medium'),
         url(${MontserratMedium}) format('truetype');
    font-weight: 500; 
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-Regular'),
         url(${MontserratRegular}) format('truetype');
    font-weight: 400; 
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat-Light'),
         url(${MontserratLight}) format('truetype');
    font-weight: 300; 
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
  font-family: 'Montserrat';
  src: local('Montserrat'), local('Montserrat-ExtraLight'),
        url(${MontserratExtraLight}) format('truetype');
  font-weight: 200; 
  font-style: normal;
  font-display: swap;
  }



`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1702px;
  padding: 0 51px 0 34px;
`;
