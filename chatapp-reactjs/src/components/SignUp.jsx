import React from "react";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <>
      <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
        <Link
          to="/"
          className="bg-green-400 text-white font-bold text-xl p-4"
          alt="Logo"
        >
          Chat App
        </Link>
      </div>
      <form
        className="flex flex-col pt-3 md:pt-8 p-4"
        onsubmit="event.preventDefault();"
      >
        <div className="flex flex-col pt-4">
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Smith"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="username" className="text-lg">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="confirm-password" className="text-lg">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <input
          type="submit"
          value="Sign up"
          className="bg-green-400 cursor-pointer duration-500 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
        />
      </form>
    </>
  );
}
