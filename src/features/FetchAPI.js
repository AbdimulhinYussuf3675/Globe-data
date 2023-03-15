import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getCountries = createAsyncThunk('getCountries', async () => {
  try {
    const response = await axios.get('https://restcountries.com/v2/all');
    return response.data;
  } catch (error) {
    return error;
  }
});

export default getCountries;
