import { fonts } from './Fonts';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${fonts}

  * {
    font-family: 'Pretendard', sans-serif;
  }
`;

export default GlobalStyles;
