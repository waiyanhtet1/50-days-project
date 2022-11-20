import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      state.items.push({
        id: newItem.id,
        title: newItem.title,
        price: newItem.price,
        rating: newItem.rating,
        image: newItem.image,
      });
    },
    remove(state, action) {
      const productId = action.payload;
      const findIndex = state.items.findIndex((item) => item.id === productId);
      const removeItem = state.items.splice(findIndex, 1);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
