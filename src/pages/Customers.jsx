import React from 'react';

const Customers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Clients</h1>

      <div className="space-y-6">

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Liste des clients</h2>
          <p className="text-gray-600">
            Consulter les informations de vos clients et accéder à leur historique.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Nouveaux clients</h2>
          <p className="text-gray-600">
            Ajouter et enregistrer de nouveaux clients dans la base de données.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Programme de fidélité</h2>
          <p className="text-gray-600">
            Suivre et gérer les avantages de fidélité pour vos clients réguliers.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Statistiques clients</h2>
          <p className="text-gray-600">
            Analyser le nombre de clients actifs et les tendances d’achat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
