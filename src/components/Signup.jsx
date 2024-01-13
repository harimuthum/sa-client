/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleRegister } from "../utils/resource";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim() && email.trim()) {
      console.log(email, username, password);
      handleRegister(email, username, password, navigate);
      setPassword("");
      setUsername("");
      setEmail("");
    }
  };

  return (
    <main className="w-full min-h-[100vh] flex flex-col items-center justify-center">
      <form
        className="w-full min-h-[100vh] flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-[2%] font-bold text-3xl">Create an account</h2>
        <label htmlFor="email" className="font-bold text-xl">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email w-[60%] border-2 border-gray-400"
        />
        <label htmlFor="username" className="font-bold text-xl">
          Username
        </label>
        <input
          id="username"
          name="username"
          required
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username w-[60%] border-2 border-gray-400"
        />
        <label htmlFor="password" className="font-bold text-xl">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password w-[60%] border-2 border-gray-400"
        />
        <button className="w-[200px] p-[15px] bg-[#e28521] rounded-md px-8 py-2 text-slate-800 font-bold transition duration-500 ease-in-out hover:bg-[#5c4223] hover:text-white">
          REGISTER
        </button>
        <p className="text-center my-8 flex flex-row">
          Already have an account?{" "}
          <div className="ml-1 transition duration-500 ease-in-out hover:scale-105 ">
            <Link className="link font-bold" to="/">
              Sign in
            </Link>
          </div>
        </p>
      </form>
    </main>
  );
};

export default Signup;
