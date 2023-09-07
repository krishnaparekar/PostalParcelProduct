import React, { useState , useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const emailInput = useRef(null);

  useEffect (() => {
    if (emailInput.current){
      emailInput.current.focus();;
    }
  },[])

  const handleLogin = () => {
    // Check if email and password match the condition
    if (email === 'test' && password === 'test') {
      localStorage.setItem('isLogin', true);
      navigate('/');
    } else {
      setError('Invalid login credentials');
    }
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-fit overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-cyan-800/40  lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-700 decoration-wavy">
            Sign in
          </h1>
          <form className="mt-6">
            {/* Email Input */}
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-4 py-2 mt-2 bg-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={emailInput}
              />
            </div>
            {/* Password Input */}
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full px-4 py-2 mt-2 bg-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
              />
            </div>
            <a href="#" className="text-xs text-blue-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button
                type="button"
                onClick={handleLogin}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Login
              </button>
            </div>
          </form>
          {/* Error Message */}
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
