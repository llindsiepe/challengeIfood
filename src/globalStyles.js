// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

// Definir um objeto com suas cores
export const cores = {
    white: '#ffffff',
    black: '#000000',
    primaryRed: '#EA1D2C',
    secondaryRed500: '#A02331',
    secondaryRed800: '#9C050B',
    secondaryPink200: '#F7ACB7',
    secondaryPink500: '#DA5D69',
    secondaryOrange100: '#F5F0EB',
    secondaryOrange300: '#F5E9DA',
    secondaryOrange400: '#FFDEBB',
    secondaryOrange500: '#FED298',
    secondaryOrange700: '#FFB761',
    secondaryGray100: '#DDDDDD',
    secondaryGray400: '#A6A29F',
    secondaryGray800: '#3F3E3E',
    green500: '#61C453'
};

// Estilos globais
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0.4rem 0.5rem;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;

  }

  body {
    background-color: ${cores.white};
    font-family: 'DM Sans', sans-serif;
  }
`;
