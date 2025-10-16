import React from 'react';
import { useOrdersStore } from '../store/useOrdersStore';
import { Trash2, Eye } from 'lucide-react';

const Orders = () => {
  const orders = useOrdersStore((state) => state.orders);
  const deleteOrder = useOrdersStore((state) => state.deleteOrder);
  const updateOrderStatus = useOrdersStore((state) => state.updateOrderStatus);
  const [selectedOrder, setSelectedOrder] = React.useState(null);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📦 Mes Commandes</h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500 text-lg">Vous n'avez aucune commande</p>
          <p className="text-gray-400 text-sm mt-2">
            Commencez par ajouter des produits au panier
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600"
            >
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Commande #{order.id}
                  </h3>
                  <p className="text-sm text-gray-600">
                    📅 {order.date}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateOrderStatus(order.id, e.target.value)
                    }
                    className="px-3 py-1 rounded border border-gray-300 text-sm font-semibold"
                  >
                    <option>En attente</option>
                    <option>Confirmée</option>
                    <option>Expédiée</option>
                    <option>Livrée</option>
                    <option>Annulée</option>
                  </select>

                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

             
              <div className="bg-gray-50 rounded p-4 mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  📋 Articles ({order.totalItems})
                </p>
                <div className="space-y-2">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-gray-600">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-semibold text-gray-800">
                        {(parseFloat(item.price) * item.quantity).toFixed(2)}{" "}
                        MAD
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-green-600">
                    {order.totalPrice.toFixed(2)} MAD
                  </p>
                </div>

                <button
                  onClick={() =>
                    setSelectedOrder(
                      selectedOrder?.id === order.id ? null : order
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
                >
                  <Eye className="w-4 h-4" />
                  {selectedOrder?.id === order.id ? "Masquer" : "Détails"}
                </button>
              </div>

            
              {selectedOrder?.id === order.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    📦 Détails des articles
                  </h4>
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-gray-50 rounded p-3 flex gap-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-800">
                            {item.name}
                          </h5>
                          <p className="text-sm text-gray-600">
                            Volume: {item.volume}
                          </p>
                          <p className="text-sm text-gray-600">
                            Origine: {item.origin}
                          </p>
                          <p className="text-sm font-semibold mt-1">
                            {item.quantity} x {parseFloat(item.price).toFixed(2)}{" "}
                            MAD = {(parseFloat(item.price) * item.quantity).toFixed(2)}{" "}
                            MAD
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;