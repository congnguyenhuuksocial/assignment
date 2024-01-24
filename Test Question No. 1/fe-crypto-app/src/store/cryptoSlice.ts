import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CryptoState {
  coinData: any; // Replace with a proper type
}

// Define the initial state using that type
const initialState: CryptoState = {
  coinData: null,
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCoinData: (state, action: PayloadAction<any>) => {
      state.coinData = action.payload;
    },
  },
});

export const { setCoinData } = cryptoSlice.actions;

export default cryptoSlice.reducer;
