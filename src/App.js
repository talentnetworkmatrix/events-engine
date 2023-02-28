import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, AuthRoute } from './context/auth'
import { routesList } from './routes/index';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            {/* Rutas Generales */}
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/login'
              element={<Login />}
            />

            {/* Rutas Privadas */}
            {
              routesList.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <AuthRoute role={route.role}>
                      {route.component}
                    </AuthRoute>
                  }
                />
              ))
            }

            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
