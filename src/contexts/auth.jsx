import { createContext, useContext, useMemo, useReducer } from 'react';
import { pb } from '@/api/pb';

const AuthSetContext = createContext();
const AuthContext = createContext();

const initialAuthInfo = {
  user: null,
  isAuth: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'auth/signup':
    case 'auth/signin':
      return action.payload;
    case 'auth/signout':
      return initialAuthInfo;
    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const [authInfo, dispatch] = useReducer(authReducer, initialAuthInfo);

  const authMethods = useMemo(
    () => ({
      async signUp(registerUser) {
        try {
          const createdUser = await pb.collection('users').create(registerUser);

          dispatch({
            type: 'auth/signup',
            payload: createdUser,
          });
        } catch (error) {
          if (!error.isAbort) {
            console.error(error);
          }
        }
      },
      async signIn(email, password) {
        try {
          const user = await pb
            .collection('users')
            .authWithPassword(email, password);

          dispatch({
            type: 'auth/signin',
            payload: user,
          });
        } catch (error) {
          if (!error.isAbort) {
            console.error(error);
          }
        }
      },
      signOut() {
        pb.authStore.clear();
        dispatch({
          type: 'auth/signout',
        });
      },
    }),
    []
  );

  return (
    <AuthSetContext.Provider displayName="AuthSetContext" value={authMethods}>
      <AuthContext.Provider displayName="AuthContext" value={authInfo}>
        {children}
      </AuthContext.Provider>
    </AuthSetContext.Provider>
  );
}

export const useAuth = (selector = (x) => x) => {
  const authInfo = useContext(AuthContext);
  return selector(authInfo);
};

export const useSetAuth = (selector = (x) => x) => {
  const authMethods = useContext(AuthSetContext);
  return selector(authMethods);
};
