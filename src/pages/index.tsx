// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CountryCard from '../components/CountryCard';
import { fetchCountryData } from '../hooks/useCountryData';
import { Country } from '../types/country';

const Home: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    fetchCountryData().then(setCountries);
  }, []);

  const filteredCountries = countries.filter((country) => 
    country.name.common.toLowerCase().includes(search.toLowerCase()) &&
    (region ? country.region === region : true)
  );

  return (
    <Layout search={search} setSearch={setSearch} region={region} setRegion={setRegion}>
      <div className="country-grid">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} onClick={() => console.log(country)} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
