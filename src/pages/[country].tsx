// pages/[country].tsx
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import CountryDetail from '../components/CountryDetail';
import { Country } from '../types/country';
import axios from 'axios';

interface CountryDetailPageProps {
  country: Country;
}

const CountryDetailPage: React.FC<CountryDetailPageProps> = ({ country }) => {
  return <CountryDetail country={country} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('https://restcountries.com/v3.1/all');
  const countries: Country[] = res.data;

  const paths = countries.map((country) => ({
    params: { country: country.name.common.toLowerCase() }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const countryName = context.params?.country;
  const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
  const country = res.data[0];

  return { props: { country } };
};

export default CountryDetailPage;
