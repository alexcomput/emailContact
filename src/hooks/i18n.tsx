import React, { createContext, useContext, useCallback, useState } from 'react';
import intl from 'react-intl-universal';
import usePersistedState from './usePersistedState';
import pt from '../locales/pt-BR.json';
import en from '../locales/en-US.json';
import imageUsa from '../assets/translate/usa.png';
import imgBrazil from '../assets/translate/brazil.png';

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

  const updateLang = useCallback(
    (index) => {
      setTranslat(index);
    },
    [translate]
  );

  return (
    <TranslateContext.Provider value={{ updateLang }}>
      <div className="translate-img">
        <a href="#" onClick={() => updateLang('en-US')}>
          <img src={imageUsa} title="" width="30px" />
        </a>
        <a href="#" onClick={() => updateLang('pt-BR')}>
          <img src={imgBrazil} title="" width="30px" />
        </a>
      </div>

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
