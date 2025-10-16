import React from 'react';
import { ShoppingCart, Trash2, Edit2 } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useProductsStore } from '../store/useProductsStore';
import AddProductForm from '../components/AddProductForm';

const Products = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const products = useProductsStore((state) => state.products);
  const deleteProduct = useProductsStore((state) => state.deleteProduct);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Nos Produits Bio
        </h1>
      </div>

     
      <AddProductForm />

   
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <p className="text-gray-600">
          Total: <span className="font-bold text-green-600">{products.length} produits</span>
        </p>
      </div>

     
      {products.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <p className="text-gray-500 text-lg">Aucun produit disponible</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2 min-h-[50px]">
                {product.description}
              </p>
              <p className="text-green-600 font-bold text-lg mb-2">
                {parseFloat(product.price).toFixed(2)} MAD
              </p>
              <div className="space-y-1 text-sm text-gray-500 mb-4">
                <p>📦 Volume: {product.volume}</p>
                <p>🌍 Origine: {product.origin}</p>
              </div>

              {/* Boutons */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Ajouter
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  title="Supprimer"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;