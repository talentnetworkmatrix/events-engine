import React, { useState, useEffect, useContext, createContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getTokenAndInfoUserFromAPI, getInfoUserFromAPI } from '../api';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const token = localStorage.getItem('token');
    if(!!token) {
      try {
        const userInfo = await getInfoUserFromAPI(token);
        setUser(userInfo);
        setLoadingAuth(false);
      } catch (error) {
        localStorage.removeItem('token');
      }
    }else {
      setLoadingAuth(false);
    }
  }

  const login = async (infoLoginForm) => {
    const { userInfo, token } = await getTokenAndInfoUserFromAPI(infoLoginForm);

    localStorage.setItem('token', token);
    setUser(userInfo);
    userInfo.isAdmin ? navigate('/admin') : navigate('/profile');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  const auth = { user, login, logout, loadingAuth };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

function AuthRoute(props) {
  const auth = useAuth();
  if (auth.loadingAuth) return <p>Loading</p>;
  if (!auth.user) return <Navigate to="/login" />;
  if (props.role==='admin' && !auth.user?.isAdmin) return <Navigate to="/login" />;
  return props.children;
}

export {
  AuthProvider,
  AuthRoute,
  useAuth,
};