import React from 'react';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, loadingAuth, user } = useAuth();

  const loginForm = (data) => {
    login(data);
  };

  if (loadingAuth) {
    return <p>Loading</p>;
  }

  if (user) {
    return <Navigate to="/profile" />
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit(loginForm)} className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
          <label htmlFor='email' className="block mb-2 text-gray-700 font-bold">Correo electrónico:</label>
          <input
            className="w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 border border-gray-200 rounded"
            type="text"
            name='email'
            id='email'
            placeholder="user@example.com"
            {...register("email", { required: true, maxLength: 20 })}
          />
          {errors.username && <span>This field is required</span>}

          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    </>
  )
}

export { Login };