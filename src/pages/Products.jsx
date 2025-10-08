import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './../context/CartContext';
import { oliveOilProducts } from '../content/data';

const Products = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Nos Produits Bio
      </h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Liste des produits biologiques...</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {oliveOilProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-100 h-100 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">{product.price} MAD</p>
            <p className="text-sm text-gray-500">Volume: {product.volume}</p>
            <p className="text-sm text-gray-500">Origine: {product.origin}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="flex-1 bg-green-600 text-white py-2 px-15 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium m-auto"
            >
              <ShoppingCart className="w-5 h-5" />
              Ajouter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
