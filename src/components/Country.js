import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ data }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/details/${data.name}`, { state: data });
  };

  return (
    <button type="button" onClick={handleRoute} className="country">
      <div className="image">
        <img className="country-img" src={data.flag} alt="Country Flag" />
      </div>
      <div className="details">
        <h2>{data.name}</h2>
        <p>
          Population:
          <span>{data.population}</span>
        </p>
      </div>
    </button>
  );
};

export default Country;
