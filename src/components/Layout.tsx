import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  search: string;
  setSearch: (value: string) => void;
  region: string;
  setRegion: (value: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, search, setSearch, region, setRegion }) => {
  return (
    <div>
      <Header search={search} setSearch={setSearch} region={region} setRegion={setRegion} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
