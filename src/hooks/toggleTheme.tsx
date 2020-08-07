import React, { createContext, useContext, useCallback, useState } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade, position } from 'polished';
import usePersistedState from './usePersistedState';

import lightTheme from '../styles/themes/light';
import darkTheme from '../styles/themes/dark';

interface themeProps {
  title: string;
}

interface opProp {
  toggleTheme(): void;
}

interface ToggleThemeContextData {
  theme: DefaultTheme;
}

const ToggleThemeContext = createContext<ToggleThemeContextData>(
  {} as ToggleThemeContextData
);

const ToggleThemeProvider: React.FC<opProp> = ({ toggleTheme, children }) => {
  const { colors, title } = useContext(ThemeContext);

  const [theme, setTheme] = useState(lightTheme);

  return (
    <ToggleThemeContext.Provider value={{ theme }}>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={shade(0.1, colors.secondary)}
        className="switch-component"
      />
    </ToggleThemeContext.Provider>
  );
};

function useTheme(): ToggleThemeContextData {
  const context = useContext(ToggleThemeContext);

  if (!context) {
    throw new Error('theme must be used within a ThemeProvider');
  }

  return context;
}

export { ToggleThemeProvider, useTheme };
