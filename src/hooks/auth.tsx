import React, { createContext, useCallback, useState, useContext } from 'react';

interface SingInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: object;
  singIn(credentials: SingInCredentials): Promise<void>;
  singOut(): void;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@portalFilizal:token');
    const user = localStorage.getItem('@portalFilizal:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const singOut = useCallback(async () => {
    localStorage.removeItem('@portalFilizal:token');
    localStorage.removeItem('@portalFilizal:user');

    setData({} as AuthState);
  }, []);

  const singIn = useCallback(async ({ username, password }) => {
    if (username === 'Admin' && password === 'Admin') {
      const { token, user } = {
        token: 'A vaga é minha',
        user: {
          email: 'alexcomput@gmail.com',
        },
      };

      if (token && user) {
        localStorage.setItem('@portalFilizal:token', token);
        localStorage.setItem('@portalFilizal:user', JSON.stringify(user));

        setData({ token, user });
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
