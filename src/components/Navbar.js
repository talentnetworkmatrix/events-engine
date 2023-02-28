import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <header>
      <nav className="bg-gray-800">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <p className="text-gray-100 text-lg font-bold">Events Engine</p>
              <Link to="/admin">Admin</Link>
              <Link to="/profile">Profile</Link>
            </div>
            <div className="flex items-center">
              {
                localStorage.getItem('token')
                  ? <button onClick={logout} className="bg-red-600 hover:bg-red-500 text-gray-100 font-semibold py-2 px-4 border border-red-600 rounded-lg ml-4">
                      Cerrar sesión
                    </button>
                  : <Link to="login" className="bg-gray-700 hover:bg-gray-600 text-gray-100 font-semibold py-2 px-4 border border-gray-600 rounded-lg">
                      Iniciar sesión
                    </Link>
              }
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export { Navbar }