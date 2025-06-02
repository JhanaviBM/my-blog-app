import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-start pl-16"
      style={{ backgroundImage: "url('/images/home.avif')" }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg text-left max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Share Your Thoughts with the World!
        </h1>
        <p className="text-gray-600 mb-6">Write your blog, Stack up all your memories and cherish them at all time.</p>
        <button
          onClick={() => navigate('/create')}
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded"
        >
          Create a Blog!
        </button>
      </div>
    </div>
  );
};

export default Home;
