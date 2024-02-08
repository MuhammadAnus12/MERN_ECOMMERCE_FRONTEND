import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createProduct, fetchAllProductsByFilters ,fetchBrands,fetchCategories, fetchProductById, updateProduct} from './productApi';

const initialState = {
  products: [],
  status: 'idle',
  totalItems:0,
  brands:[],
  categories:[],
  selectedProduct:null
};


export const fetchProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    const response = await fetchProductById(id);
    // The value which we return  becomes the 'fullfilled' actions payload
    return response.data;
  }
);
export const fetchBrandsAsync = createAsyncThunk(
  'product/fetchBrands',
  async () => {
    const response = await fetchBrands();
    // The value which we return  becomes the 'fullfilled' actions payload
    return response.data;
  }
);
export const fetchCategoriesAsync = createAsyncThunk(
  'product/fetchCategories',
  async () => {
    const response = await fetchCategories();
    // The value which we return  becomes the 'fullfilled' actions payload
    return response.data;
  }
);
export const createProductAsync = createAsyncThunk(
  'product/createProduct',
  async (product) => {
    const response = await createProduct(product);
    // The value which we return  becomes the 'fullfilled' actions payload
    return response.data;
  }
);
export const updateProductAsync = createAsyncThunk(
  'product/updateProduct',
  async (update) => {
    const response = await updateProduct(update);
    // The value which we return  becomes the 'fullfilled' actions payload
    return response.data;
  }
);



export const fetchAllProductsByFiltersAsync = createAsyncThunk(
  'product/fetchAllProductsByFilters',
  async ({filter,sort,pagination,admin}) => {
    const response = await fetchAllProductsByFilters(filter,sort,pagination,admin);
    // The value which we return  becomes the 'fullfilled' actions payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearSelectedProduct:(state)=>{
      state.selectedProduct=null
    },
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories= action.payload;
      })
      .addCase(fetchAllProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedProduct=action.payload;
      })
      .addCase(createProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products.push(action.payload);
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.products.findIndex(product=>product.id===action.payload.id)
        state.products[index]=action.payload;
      });
  },
});

export const { clearSelectedProduct} = productSlice.actions;
export const selectAllProducts = (state) => state.product.products;
export const selectBrands = (state) => state.product.brands;

export const selectCategories = (state) => state.product.categories;
export const selectedProductById= (state) => state.product.selectedProduct;
export const selectTotalItems = (state) => state.product.totalItems;
export const selectProductListStatus=(state)=>state.product.status
export default productSlice.reducer;
