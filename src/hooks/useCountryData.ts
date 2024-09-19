import axios from 'axios';
import { Country } from '../types/country';

export const fetchCountryData = async (): Promise<Country[]> => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
  }
}