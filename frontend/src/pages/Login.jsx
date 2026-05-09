import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 text-white flex-col justify-between p-12 relative overflow-hidden">

        <div>
          <h1 className="text-5xl font-bold mb-4">
            DASHBOARD
          </h1>

          <p className="text-lg text-blue-100">
            Project management for modern teams
          </p>
        </div>

        {/* Mock Dashboard Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">

          <div className="grid grid-cols-3 gap-4 mb-6">

            <div className="bg-white/20 h-24 rounded-xl"></div>
            <div className="bg-white/20 h-24 rounded-xl"></div>
            <div className="bg-white/20 h-24 rounded-xl"></div>

          </div>

          <div className="space-y-3">

            <div className="bg-white/20 h-4 rounded"></div>

            <div className="bg-white/20 h-4 rounded w-2/3"></div>

          </div>
        </div>

        {/* Footer */}
        <div>

          <p className="italic text-blue-100 mb-4">
            “The clarity this gives our team is unmatched.”
          </p>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">
              SP
            </div>

            <div>
              <h3 className="font-semibold">
                Shreyansh
              </h3>

              <p className="text-sm text-blue-100">
                Engineering Lead
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 p-8">

        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

          <h2 className="text-4xl font-bold mb-2">
            Welcome back
          </h2>

          <p className="text-gray-500 mb-8">
            Sign in to your workspace
          </p>

          <form className="space-y-6">

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="name@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Sign In
            </button>

          </form>

          <p className="text-center text-gray-500 mt-6">
            Don’t have an account?{" "}

            <
  to="/register"
  <span className="text-blue-600 font-semibold cursor-pointer">
  Create one

  </span>
              
            
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;