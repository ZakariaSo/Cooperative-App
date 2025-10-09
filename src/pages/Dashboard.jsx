import React from 'react';

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
    </div>
  );
};

export default Dashboard;