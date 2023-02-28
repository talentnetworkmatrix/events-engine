import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, loadingAuth, user } = useAuth();

  const signupForm = (data) => {
    login(data);
  };

  if (loadingAuth) {
    return <p>Loading</p>;
  }

  if (user) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit(signupForm)}
          className="max-w-md w-full p-10 bg-white rounded-lg shadow-md space-y-6"
        >
          <article className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-bold"
            >
              Nombre(s)
            </label>
            <input
              className="w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 border border-gray-200 rounded"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Jose Juan"
              {...register("firstName", { required: true, maxLength: 25 })}
            />
          </article>
          <article className="space-y-2">
            <label htmlFor="lastName" className="block text-gray-700 font-bold">
              Apellido(s)
            </label>
            <input
              className="w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 border border-gray-200 rounded"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Perez Hernandez"
              {...register("lastName", { required: true, maxLength: 25 })}
            />
          </article>
          <article className="space-y-2">
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Correo electrónico:
            </label>
            <input
              className="w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 border border-gray-200 rounded"
              type="text"
              name="email"
              id="email"
              placeholder="user@example.com"
              {...register("email", { required: true, maxLength: 20 })}
            />
          </article>
          {errors.username && <span>This field is required</span>}
          <article className="space-y-2">
            <label htmlFor="password" className="block text-gray-700 font-bold">
              Contraseña:
            </label>
            <input
              className="w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 border border-gray-200 rounded"
              type="password"
              name="password"
              id="password"
              placeholder="user@example.com"
              {...register("password", { required: true, maxLength: 20 })}
            />
          </article>
          {errors.username && <span>This field is required</span>}

          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </section>
    </>
  );
}

export { Signup };
