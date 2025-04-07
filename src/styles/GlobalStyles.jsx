import { fonts } from './Fonts';
import { createGlobalStyle } from 'styled-components';
const breakPoints = [576, 768, 992, 1200];
export const mediaQueries = breakPoints.map((bp) => `@media (max-width: ${bp}px)`);

export const GlobalStyles = createGlobalStyle`
  ${fonts}

  * {
    font-family: 'Pretendard', sans-serif;
    
  }
  p {
    margin: 0;
  }
  #root {
    max-width:800px;
    margin: 0 auto;

  ${mediaQueries[1]} {
    max-width: 768px;
  }

  ${mediaQueries[0]} {
    max-width: 576px;
    margin :auto;
    height: 100%;
  }
  } 
`;
