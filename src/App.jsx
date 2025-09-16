import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './styles/GlobalStyles.jsx';
import Routers from './router/Routers.jsx';
import { RecoilRoot } from 'recoil';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RecoilRoot>
      <Routers />
    </RecoilRoot>
  </StrictMode>,
);
