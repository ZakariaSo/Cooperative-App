import React from 'react';
import { X, Plus } from 'lucide-react';
import { useProductsStore } from '../store/useProductsStore';

const AddProductForm = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    description: '',
    price: '',
    volume: '',
    origin: '',
    image: '',
  });
  const [error, setError] = React.useState('');

  const addProduct = useProductsStore((state) => state.addProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || '' : value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (
      !formData.name ||
      !formData.description ||
      !formData.price ||
      !formData.volume ||
      !formData.origin ||
      !formData.image
    ) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    if (formData.price <= 0) {
      setError('Le prix doit être supérieur à 0');
      return;
    }

   
    addProduct(formData);

  
    setFormData({
      name: '',
      description: '',
      price: '',
      volume: '',
      origin: '',
      image: '',
    });

    setError('');
    setIsOpen(false);

    alert('✅ Produit ajouté avec succès !');
  };

  return (
    <div className="mb-6">
    
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
      >
        <Plus className="w-5 h-5" />
        {isOpen ? 'Fermer' : 'Ajouter un produit'}
      </button>


      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
           
            <div className="bg-green-600 text-white p-4 flex justify-between items-center sticky top-0">
              <h2 className="text-xl font-bold">Ajouter un nouveau produit</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-green-700 rounded transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

         
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
              {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded text-sm">
                  {error}
                </div>
              )}

      
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Nom du produit *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: Huile d'Olive Bio"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-green-600"
                />
              </div>

          
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Décrivez le produit..."
                  rows="3"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-green-600 resize-none"
                />
              </div>

      
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Prix (MAD) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Ex: 150.50"
                  step="0.01"
                  min="0"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-green-600"
                />
              </div>

          
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Volume *
                </label>
                <input
                  type="text"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  placeholder="Ex: 500ml, 1L"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-green-600"
                />
              </div>

        
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Origine *
                </label>
                <input
                  type="text"
                  name="origin"
                  value={formData.origin}
                  onChange={handleChange}
                  placeholder="Ex: Maroc, Agadir"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-green-600"
                />
              </div>

          
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  URL de l'image *
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Ex: /images/pic20.jpg"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-green-600"
                />
              </div>

           
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors font-semibold"
                >
                  Ajouter le produit
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 transition-colors font-semibold"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProductForm;