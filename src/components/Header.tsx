import React from 'react';

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
  region: string;
  setRegion: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ search, setSearch, region, setRegion }) => {
  return (
    <header className="header">
      <input 
        type="text" 
        placeholder="Search by country or capital..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </header>
  );
};

export default Header;
