import React from "react";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
const checkoutHandler = () => {
  alert("Merci pour votre commande ! 🫒");
  window.location.href = "/Orders"; 

}

const Header = ({ toggleSidebar }) => {

  const {
    cartItems,
    getTotalItems,
    getTotalPrice,
    updateQuantity,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <>
      <header className="bg-white shadow-lg h-16 flex items-center px-6">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <MenuIcon />
        </button>

        <div className="flex-1 flex justify-between items-center ml-4 lg:ml-0">
          <figure className="hidden lg:block">
            <img
              src="/images/logo.png"
              alt="Logo Coopérative Bio"
              className="h-20 w-20"
            />
          </figure>
          <h2 className="text-xl font-semibold text-gray-800">
            🫒 Gestion Coopérative Elghousni 🫒
          </h2>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 rounded-lg hover:bg-gray-100"
            >
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Panel du panier */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-5 "
            onClick={() => setIsCartOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
            {/* En-tête du panier */}
            <div className="bg-green-600 text-white p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">🛒 Votre Panier</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 hover:bg-green-700 rounded transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Contenu du panier */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg">Votre panier est vide</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Ajoutez des produits pour commencer
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600">{item.volume}</p>
                          <p className="text-green-600 font-bold mt-1">
                            {parseFloat(item.price).toFixed(2)} MAD
                          </p>
                        </div>
                      </div>

                      {/* Contrôles de quantité */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-300 p-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                          >
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <span className="w-8 text-center font-semibold text-gray-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                          >
                            <Plus className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Supprimer"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Sous-total */}
                      <div className="mt-2 text-right">
                        <span className="text-sm text-gray-600">
                          Sous-total:{" "}
                        </span>
                        <span className="font-bold text-gray-800">
                          {(parseFloat(item.price) * item.quantity).toFixed(2)}{" "}
                          MAD
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pied du panier */}
            {cartItems.length > 0 && (
              <div className="border-t bg-gray-50 p-4 shadow-lg">
                <div className="bg-white rounded-lg p-4 mb-3 border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Nombre d'articles:</span>
                    <span className="font-semibold text-gray-800">
                      {getTotalItems()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-800">
                      Total:
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      {getTotalPrice().toFixed(2)} MAD
                    </span>
                  </div>
                </div>
                <button
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md"
                  onClick={checkoutHandler}
                >
                  Passer la commande
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;