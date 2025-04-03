import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './styles/GlobalStyles.jsx';
import Routers from './router/Routers.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Routers />
  </StrictMode>,
);
