import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import animation from '../assets/animation.json';
import Lottie from 'lottie-react';

export default function Register() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [nomUtilisateur, setNomUtilisateur] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [role, setRole] = useState('USER'); // Le rôle par défaut est USER
  const [showPassword, setShowPassword] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    // Validation des entrées
    if (!prenom || !nom || !nomUtilisateur || !motDePasse || !email) {
      setErrorMessage('Merci de remplir tous les champs.');
      return;
    }
  
    if (motDePasse.length < 6) {
      setErrorMessage('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    setErrorMessage(''); // Effacer tout message d'erreur précédent
   
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        prenom: prenom,
        nom: nom,
        nomUtilisateur: nomUtilisateur,
        email: email,
        motDePasse: motDePasse,
        role: role, // Inclure le rôle sélectionné dans la requête
      });
  
      console.log('Inscription réussie :', response.data);
      setRegistrationMessage('Inscription réussie !');
      setPrenom('');
      setNom('');
      setMotDePasse('');
      setNomUtilisateur('');
      setEmail('');
    } catch (error) {
      if (error.response) {
        console.error('Échec :', error.response.data);
        setErrorMessage('Échec. Veuillez réessayer.');
      } else if (error.request) {
        console.error('Aucune réponse reçue :', error.request);
        setErrorMessage("Aucune réponse reçue du serveur. Veuillez réessayer plus tard.");
      } else {
        console.error('Erreur :', error.message);
        setErrorMessage('Une erreur inattendue est survenue. Veuillez réessayer plus tard.');
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex justify-center items-center h-full" style={{ maxWidth: '50%' }}>
        <Lottie animationData={animation} />
      </div>
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Inscription</h1>
        <input
          className="mb-4 p-2 border border-gray-300 rounded w-full shadow-md"
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <input
          className="mb-4 p-2 border border-gray-300 rounded w-full shadow-md"
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          className="mb-4 p-2 border border-gray-300 rounded w-full shadow-md"
          type="text"
          placeholder="Nom d'utilisateur"
          value={nomUtilisateur}
          onChange={(e) => setNomUtilisateur(e.target.value)}
        />
        <input
          className="mb-4 p-2 border border-gray-300 rounded w-full shadow-md"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Rôle :</label>
          <select
            id="role"
            className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-md"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="USER">Utilisateur</option>
            <option value="VOYAGEUR">Voyageur</option>
          </select>
        </div>
        <div className="relative w-full mb-4">
          <input
            className="p-2 border border-gray-300 rounded w-full shadow-md"
            type={showPassword ? 'text' : 'password'}
            placeholder="Mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
          />
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2 12s3 4.5 5 6a9 9 0 0010 0c2-1.5 5-6 5-6"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2 12s3 4.5 5 6a9 9 0 0010 0c2-1.5 5-6 5-6"
                ></path>
              </svg>
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg
            -blue-700 transition"
            onClick={handleRegister}
          >
            S'inscrire
          </button>
          <Link to="/" className="text-blue-500 cursor-pointer">
            Retour à la connexion
          </Link>
        </div>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        {registrationMessage && <p className="text-green-500 mt-2">{registrationMessage}</p>}
      </div>
    </div>
  );
}
