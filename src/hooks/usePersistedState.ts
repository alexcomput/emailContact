import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { DefaultTheme } from 'styled-components';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(
  key: string,
  initialState: any
): Response<string> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return storageValue;
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
