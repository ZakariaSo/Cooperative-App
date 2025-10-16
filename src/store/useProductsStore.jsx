import { create } from 'zustand';

const initialProducts = [
  {
    id: 1,
    name: "Huile d'Olive Extra Vierge",
    description: "Première pression à froid, goût fruité intense avec des notes d'herbes fraîches",
    price: 240,
    volume: "750ml",
    origin: "Maroc",
    image: "/images/pic20.jpg"
  },
  {
    id: 2,
    name: "Huile d'Olive Douce Bio",
    description: "Goût délicat et équilibré, idéale pour les salades et cuissons douces",
    price: 190,
    volume: "500ml",
    origin: "Agadir",
    image: "/images/pic11.jpg"
  },
  {
    id: 3,
    name: "Huile d'Olive Picholine",
    description: "Variété rare aux arômes subtils d'amande et d'artichaut",
    price: 320,
    volume: "1L",
    origin: "Souss-Massa",
    image: "/images/pic14.jpg"
  },
  {
    id: 4,
    name: "Huile d'Olive Aromatisée Citron",
    description: "Huile d'olive bio infusée au citron, parfaite pour poissons et salades",
    price: 150,
    volume: "500ml",
    origin: "Essaouira",
    image: "/images/pic13.jpg"
  },
  {
    id: 5,
    name: "Huile d'Olive Intense",
    description: "Goût corsé et puissant, idéale pour les grillades et plats mijotés",
    price: 100,
    volume: "750ml",
    origin: "Meknès",
    image: "/images/pic22.jpg"
  },
  {
    id: 6,
    name: "Huile d'Olive Premium",
    description: "Cuvée spéciale, récolte manuelle, arômes complexes et raffinés",
    price: 350,
    volume: "500ml",
    origin: "Tanger",
    image: "/images/pic15.jpg"
  },
  {
    id: 7,
    name: "Huile d'Olive Aromatisée Basilic",
    description: "Huile d'olive bio avec basilic frais, idéale pour pâtes et pizzas",
    price: 200,
    volume: "500ml",
    origin: "Fès",
    image: "/images/pic16.jpg"
  },
  {
    id: 8,
    name: "Huile d'Olive Légère",
    description: "Goût subtil et léger, parfaite pour la pâtisserie et cuissons délicates",
    price: 300,
    volume: "750ml",
    origin: "Casablanca",
    image: "/images/pic18.jpg"
  },
  {
    id: 9,
    name: "Huile d'Olive Vierge",
    description: "Huile d'olive vierge de qualité supérieure, goût frais et herbacé",
    price: 220,
    volume: "1L",
    origin: "Rabat",
    image: "/images/pic19.jpg"
  },
];


export const useProductsStore = create((set, get) => ({
  products: initialProducts,


  getProducts: () => {
    const state = get();
    return state.products;
  },


  addProduct: (newProduct) =>
    set((state) => {
      const newId = Math.max(...state.products.map((p) => p.id), 0) + 1;
      
      return {
        products: [
          ...state.products,
          {
            ...newProduct,
            id: newId,
            price: parseFloat(newProduct.price),
          },
        ],
      };
    }),


  getProductById: (productId) => {
    const state = get();
    return state.products.find((product) => product.id === productId);
  },

 
  updateProduct: (productId, updatedData) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? { ...product, ...updatedData }
          : product
      ),
    })),

  deleteProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),

 
  clearProducts: () =>
    set({
      products: [],
    }),
}));