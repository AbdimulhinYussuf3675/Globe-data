import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector, useDispatch } from 'react-redux';
import getCountries from 'features/FetchAPI';
import CountriesList from '../CountriesList';

const Homepage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch, countries.length]);

  return (
    <div>
      <header className="home-header">
        <div className="logo">
          <HomeIcon className="svg_icons" />
        </div>
        <div className="search">
          {' '}
          <div className="input">
            <input
              className="inputField"
              placeholder="Search by name..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          {countries
            .filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))
            .map((country) => (
              <CountriesList key={country.id} country={country} />
            ))}
        </div>
        <div className="logo">
          <SettingsIcon className="svg_icons" />
        </div>
      </header>
    </div>
  );
};

export default Homepage;
