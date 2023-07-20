import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: null,
  reducers: {
    selectProduct: (state, action) => action.payload,
    deselectProduct: () => null,
  },
});

export const { selectProduct, deselectProduct } = productSlice.actions;
export default productSlice.reducer;