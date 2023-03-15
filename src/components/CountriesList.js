import React from 'react';
import Country from './Country';

const ContriesList = ({ countries }) => (
  <div className="countries-grid">
    <div className="country" />
    <div className="country" />
    {countries.map((countryData) => (
      <Country data={countryData} key={countryData.name} />
    ))}
  </div>
);

export default ContriesList;
