import React, { useState } from 'react';

function LoginRegister() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const toggleMode = () => {
    setForm({ email: '', password: '' });
    setError('');
    setMode(mode === 'login' ? 'register' : 'login');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please fill out all fields.');
      return;
    }

    // Replace this with API call later
    console.log(`${mode.toUpperCase()} →`, form);
    setError('');
    alert(`${mode === 'login' ? 'Logged in' : 'Registered'} successfully!`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-hotRed px-4 text-white">
        <img
        src={`${process.env.PUBLIC_URL}/secondServingLogo.png`}
        alt="Second Serving Logo"
        className="w-60 h-60 mb-5"
      />
      <h2 className="text-3xl font-bold mb-6 text-streetYellow">
        {mode === 'login' ? 'Log In' : 'Create Account'}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-streetYellow text-black p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
        />

        <label className="block mb-2 font-semibold">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
        />

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <button
          type="submit"
          className="bg-paleDog text-black font-bold py-2 px-4 w-full rounded hover:bg-yellow-400"
        >
          {mode === 'login' ? 'Log In' : 'Register'}
        </button>

        <p className="mt-4 text-center">
          {mode === 'login' ? 'Want to join the mission? ' : 'Already have an account?'}{' '}
          <button
            type="button"
            className="text-pineGreen underline font-medium"
            onClick={toggleMode}
          >
            {mode === 'login' ? 'Create account' : 'Log in'}
          </button>
        </p>
      </form>
    </div>
  );
}

export default LoginRegister;
