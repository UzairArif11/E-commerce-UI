import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  selectedProduct: null,
  categories: [],
  filters: {
    category: 'all',
    priceRange: [0, 1000],
    rating: 0,
    brand: '',
    sortBy: 'name',
  },
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        category: 'all',
        priceRange: [0, 1000],
        rating: 0,
        brand: '',
        sortBy: 'name',
      };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProducts,
  setSelectedProduct,
  setCategories,
  setFilters,
  clearFilters,
  setLoading,
  setError,
} = productSlice.actions;

export default productSlice.reducer;
