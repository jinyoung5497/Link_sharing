import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface productState {
  value: {
    getProductId: string;
    setPageSignUp: boolean;
    getLinks: boolean;
    getProjectDatails: boolean;
    isPlatformOpen: boolean;
  };
}

const initialState: productState = {
  value: {
    getProductId: "",
    setPageSignUp: false,
    getLinks: true,
    getProjectDatails: false,
    isPlatformOpen: false,
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductId: (state, action: PayloadAction<string>) => {
      state.value.getProductId = action.payload;
    },
    setPageSignUp: (state) => {
      state.value.setPageSignUp = !state.value.setPageSignUp;
    },
    getLinks: (state) => {
      state.value.getLinks = true;
      state.value.getProjectDatails = false;
    },
    getProjectDatails: (state) => {
      state.value.getProjectDatails = true;
      state.value.getLinks = false;
    },
    isPlatformOpen: (state) => {
      state.value.isPlatformOpen = !state.value.isPlatformOpen;
    },
  },
});

export const {
  getProductId,
  setPageSignUp,
  getLinks,
  getProjectDatails,
  isPlatformOpen,
} = productSlice.actions;
export default productSlice.reducer;
