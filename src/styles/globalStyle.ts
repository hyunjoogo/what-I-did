import resetStyle from './reset';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${resetStyle}

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Pretendard";
    font-weight: 300;

    ${({ theme }) => css`
      color: ${theme.text};
    `}
  }
  `;

export default GlobalStyles;
