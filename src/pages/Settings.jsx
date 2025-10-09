import React from 'react';

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Paramètres</h1>

      <div className="space-y-6">
        {/* Section Profil */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Profil</h2>
          <p className="text-gray-600">Modifier vos informations personnelles et vos préférences.</p>
        </div>

        {/* Section Sécurité */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Sécurité</h2>
          <p className="text-gray-600">Mettre à jour votre mot de passe ou activer l’authentification à deux facteurs.</p>
        </div>

        {/* Section Notifications */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Notifications</h2>
          <p className="text-gray-600">Gérer vos préférences de notifications par email ou application.</p>
        </div>

        {/* Section Langue */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Langue</h2>
          <p className="text-gray-600">Changer la langue de l’interface.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
