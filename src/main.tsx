import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  SubbrandProvider,
  ThemeProvider,
  TypographyContext,
} from '@mo/ui';
import '@mo/ui/styles/index.css';
import '@mo/ui/styles/fonts.css';
import '@mo/ui/styles/global.css';
import '@mo/ui/styles/typography.css';
import { App } from './App';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider global defaultTheme="light">
      <SubbrandProvider global defaultSubbrand="default">
        <TypographyContext.Provider value={{ variable: true }}>
          <App />
        </TypographyContext.Provider>
      </SubbrandProvider>
    </ThemeProvider>
  </StrictMode>,
);
