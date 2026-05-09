import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-4xl font-bold mb-2">
          Create Account
        </h2>

        <p className="text-gray-500 mb-8">
          Join your workspace
        </p>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
            Register
          </button>

        </form>

      </div>

    </div>
  );
};

export default Register;git push -u origin master