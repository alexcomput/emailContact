import React, { useContext } from 'react';

import Switch from 'react-switch';
import { shade } from 'polished';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ToggleThemeProvider } from './toggleTheme';

interface opProp {
  toggleTheme(): void;
}
const AppProvider: React.FC<opProp> = ({ toggleTheme, children }) => {
  return (
    <AuthProvider>
      <ToggleThemeProvider toggleTheme={toggleTheme} />

      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
