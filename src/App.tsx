import React, { useCallback, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { TranslateProvider } from './hooks/i18n';

import usePersistedState from './hooks/usePersistedState';

import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

import AppProvider from './hooks/index';

import GlobalStyled from './styles/global';

import Routes from './routes';

interface themeProps {
  title: string;
}
type props = {
  type: string;
};

const App: React.FC = () => {
  const [themeStorage, setThemeStorage] = usePersistedState<DefaultTheme>(
    'theme',
    lightTheme
  );

  const [theme, setTheme] = useState(
    themeStorage === 'dark' ? darkTheme : lightTheme
  );
  useEffect(() => {
    setThemeStorage(theme && theme.title);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(themeStorage === 'light' ? darkTheme : lightTheme);
  }, [themeStorage]);

  const lang = navigator.language;

  // const currentLocale = locales[lang] ? navigator.language : 'pt-BR';

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <TranslateProvider>
          <AppProvider toggleTheme={toggleTheme}>
            <Routes />
          </AppProvider>

          <GlobalStyled />
        </TranslateProvider>
      </ThemeProvider>
    </Router>
  );
};
export default App;
