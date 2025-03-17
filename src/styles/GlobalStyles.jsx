import { fonts } from './Fonts';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${fonts}

  * {
    font-family: 'Pretendard', sans-serif;
  }
  p {
    margin: 0;
  }
`;

export default GlobalStyles;
