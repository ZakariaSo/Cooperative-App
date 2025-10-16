import { create } from 'zustand';

export const useOrdersStore = create((set, get) => ({
  orders: [],

 
  addOrder: (cartItems) =>
    set((state) => {
      const newOrder = {
        id: Date.now(), 
        date: new Date().toLocaleString('fr-FR'),
        items: cartItems,
        totalItems: cartItems.reduce((total, item) => total + item.quantity, 0),
        totalPrice: cartItems.reduce((total, item) => {
          const price = parseFloat(item.price);
          return total + (price * item.quantity);
        }, 0),
        status: 'En attente', 
      };

      return {
        orders: [newOrder, ...state.orders], 
      };
    }),

  
  getOrders: () => {
    const state = get();
    return state.orders;
  },

  
  getOrderById: (orderId) => {
    const state = get();
    return state.orders.find(order => order.id === orderId);
  },

 
  updateOrderStatus: (orderId, status) =>
    set((state) => ({
      orders: state.orders.map(order =>
        order.id === orderId ? { ...order, status } : order
      ),
    })),

  
  deleteOrder: (orderId) =>
    set((state) => ({
      orders: state.orders.filter(order => order.id !== orderId),
    })),

 
  clearOrders: () =>
    set({
      orders: [],
    }),
}));