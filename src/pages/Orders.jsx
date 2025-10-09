import React from 'react';

const Orders = () => {
  const orders = [
    { id: 1, client: "Ilyass Daki", date: "08/10/2025", montant: "120MAD", statut: "En cours" },
    { id: 2, client: "Mohamed el qarss", date: "07/10/2025", montant: "85 MAD", statut: "Livrée" },
    { id: 3, client: "Youness Hafa", date: "06/10/2025", montant: "200 MAD", statut: "Annulée" },
    { id: 4, client: "Ayoub Tigmi", date: "05/10/2025", montant: "65 MAD", statut: "Livrée" },
    { id: 5, client: "Otman Sobahi", date: "04/10/2025", montant: "150 MAD", statut: "En cours" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Commandes</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700">ID</th>
              <th className="px-4 py-2 text-left text-gray-700">Client</th>
              <th className="px-4 py-2 text-left text-gray-700">Date</th>
              <th className="px-4 py-2 text-left text-gray-700">Montant</th>
              <th className="px-4 py-2 text-left text-gray-700">Statut</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.client}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">{order.montant}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      order.statut === "Livrée"
                        ? "bg-green-100 text-green-600"
                        : order.statut === "En cours"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.statut}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
