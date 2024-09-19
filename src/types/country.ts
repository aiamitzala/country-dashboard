export interface Country {
    name: {
      common: string;
      official: string;
    };
    population: number;
    capital: string[];
    region: string;
    flags: {
      svg: string;
      png: string;
    };
    subregion: string;
    currencies: {
      [key: string]: {
        name: string;
        symbol: string;
      };
    };
    languages: {
      [key: string]: string;
    };
    timezones: string[];
  }
  