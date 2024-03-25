import React from 'react';
import { Link } from 'react-router-dom';
import motPass from '../assets/motPass.json';
import Lottie from 'lottie-react';
const ForgetPass = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <h1 className="text-3xl font-semibold mb-4">Mot de passe oublié</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition mr-4"
        >
         réinitialiser le mot de passe
        </button>
        <Link to="/" className="text-blue-500 hover:underline">
        Revenir à la connexion
        </Link>
      </div>
      
    <div className="flex justify-center items-center h-full">
      <div className="flex items-center justify-center">
        <Lottie animationData={motPass}/>
      </div>
    </div>
  
    </div>
  );
};

export default ForgetPass;
