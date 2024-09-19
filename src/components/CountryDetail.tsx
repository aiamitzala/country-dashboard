import React from 'react';
import { Country } from '../types/country';

interface CountryDetailProps {
  country: Country;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country }) => {
  return (
    <div className="country-detail">
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Currencies: {Object.values(country.currencies).map(c => c.name).join(', ')}</p>
      <p>Languages: {Object.values(country.languages).join(', ')}</p>
      <p>Timezones: {country.timezones.join(', ')}</p>
    </div>
  );
};

export default CountryDetail;
