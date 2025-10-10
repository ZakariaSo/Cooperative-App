import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Produits</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">10</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Commandes</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Clients</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Revenu</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">1000 MAD</p>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Activité récente
        </h2>
        <p className="text-gray-600">
          La coopérative a mené une activité dans la région de Taroudant pour
          organiser des cours de sensibilisation destinés aux enfants.
        </p>

        <p className="text-gray-600 mt-2">
          Cette initiative avait pour objectif de promouvoir l’éducation, le
          respect de l’environnement et la solidarité au sein de la communauté.
        </p>

        <p className="text-gray-600 mt-2">
          Les enfants ont participé activement aux ateliers, apprenant de
          nouvelles valeurs à travers des activités ludiques et éducatives.
        </p>

        <p className="text-gray-600 mt-2">
          La coopérative prévoit de renouveler ce type d’action afin de
          renforcer son rôle social dans la région.
        </p>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Ventes par catégorie
        </h2>
        <p className="text-gray-600">
          Aucun Données de ventes par catégorie n'est disponible pour le moments ...
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
