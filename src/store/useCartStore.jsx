import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  cartItems: [],
  isCartOpen: false,


  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(item => item.id === product.id);

      if (existingItem) {
        return {
          cartItems: state.cartItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      };
    }),


  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter(item => item.id !== productId),
    })),

  
  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return {
          cartItems: state.cartItems.filter(item => item.id !== productId),
        };
      }

      return {
        cartItems: state.cartItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        ),
      };
    }),

 
  clearCart: () =>
    set({
      cartItems: [],
    }),


  setIsCartOpen: (isOpen) =>
    set({ isCartOpen: isOpen }),

 
  getTotalItems: () => {
    const state = get();
    return state.cartItems.reduce((total, item) => total + item.quantity, 0);
  },


  getTotalPrice: () => {
    const state = get();
    return state.cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      return total + (price * item.quantity);
    }, 0);
  },
}));

export const useCart = () => {
  return useCartStore((state) => ({
    cartItems: state.cartItems,
    isCartOpen: state.isCartOpen,
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
    updateQuantity: state.updateQuantity,
    getTotalItems: state.getTotalItems,
    getTotalPrice: state.getTotalPrice,
    clearCart: state.clearCart,
    setIsCartOpen: state.setIsCartOpen,
  }));
};


export function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>
        Ajouter au panier
      </button>
    </div>
  );
}


export function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const getTotalItems = useCartStore((state) => state.getTotalItems());
  const getTotalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <div>
      <h2>Panier ({getTotalItems})</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              updateQuantity(item.id, parseInt(e.target.value))
            }
          />
          <button onClick={() => removeFromCart(item.id)}>
            Supprimer
          </button>
        </div>
      ))}
      <p>Total: ${getTotalPrice.toFixed(2)}</p>
    </div>
  );
}


export function CartButton() {
  const getTotalItems = useCartStore((state) => state.getTotalItems());
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);

  return (
    <button onClick={() => setIsCartOpen(!isCartOpen)}>
      🛒 Panier ({getTotalItems()})
    </button>
  );
}