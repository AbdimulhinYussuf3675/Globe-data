import { createSlice } from '@reduxjs/toolkit';
import getCountries from 'features/FetchAPI';

const initialState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => ({
      ...state,
      countries: action.payload,
    }));
  },
});

export default countriesSlice.reducer;
