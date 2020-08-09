import React, { createContext, useContext, useCallback, useState } from 'react';
import intl from 'react-intl-universal';
import usePersistedState from './usePersistedState';
import pt from '../locales/pt-BR.json';
import en from '../locales/en-US.json';

interface TranslateContextData {
  updateLang(message: string): void;
}

const TranslateContext = createContext<TranslateContextData>(
  {} as TranslateContextData
);

const TranslateProvider: React.FC = ({ children }) => {
  let currentLocale = 'pt-BR';

  const locales = {
    'pt-BR': pt,
    'en-US': en,
  };

  const [translate, setTranslat] = usePersistedState<string>(
    'translate',
    currentLocale
  );

  currentLocale = translate;

  intl.init({
    currentLocale,
    locales,
  });

  const updateLang = useCallback(() => {}, []);

  return (
    <TranslateContext.Provider value={{ updateLang }}>
      {children}
    </TranslateContext.Provider>
  );
};

function useTranslate(): TranslateContextData {
  const context = useContext(TranslateContext);

  if (!context) {
    throw new Error('useToast must be used within a TranslateProvider');
  }

  return context;
}

export { useTranslate, TranslateProvider };
