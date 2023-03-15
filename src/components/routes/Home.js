import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector, useDispatch } from 'react-redux';
import getCountries from 'features/FetchAPI';
import CountriesList from '../CountriesList';

const Homepage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch, countries.length]);

  const newCountries = countries.filter(
    (country) => country.name.toLowerCase().includes(searchItem.toLowerCase())
      || country.region.toLowerCase().includes(searchItem.toLowerCase()),
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };

  return (
    <div>
      <header className="home-header">
        <div className="logo">
          <HomeIcon className="svg_icons" />
        </div>
        <div className="search">
          {' '}
          <input
            type="text"
            name="searchItem"
            placeholder="search for a country"
            value={searchItem}
            onChange={handleSearch}
          />
        </div>
        <div className="logo">
          <SettingsIcon className="svg_icons" />
        </div>
      </header>

      {searchItem.length ? (
        <CountriesList countries={newCountries} />
      ) : (
        <CountriesList countries={countries} />
      )}
    </div>
  );
};

export default Homepage;
