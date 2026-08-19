import { createSelector, createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cart");

const initialState = {
  cartItems: savedCart ? JSON.parse(savedCart) : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id,
          );
        }
      }
    },
  },
});

export const getCartItems = (state) => state.cart.cartItems;

export const getTotalQuantity = createSelector(getCartItems, (items) =>
  items.reduce((total, item) => total + item.quantity, 0),
);

export const getTotalPrice = createSelector(getCartItems, (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0),
);

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
