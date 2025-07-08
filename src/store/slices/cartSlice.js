import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          ...product,
          quantity,
        });
      }
      
      state.totalItems += quantity;
      state.totalPrice += product.price * quantity;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === productId);
      
      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        state.totalItems -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.id === productId);
      
      if (item) {
        const quantityDiff = quantity - item.quantity;
        item.quantity = quantity;
        state.totalItems += quantityDiff;
        state.totalPrice += item.price * quantityDiff;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  closeCart,
} = cartSlice.actions;

export default cartSlice.reducer;
