import React, { useState, useEffect } from 'react';
import getLocalStorageData from './handleLocalStorage';

const Experience = () => {
  const [position, setPosition] = useState(getLocalStorageData("position"));
  const [company, setCompany] = useState(getLocalStorageData("company"));
  const [companyCity, setCompanyCity] = useState(getLocalStorageData("companyCity"));

  useEffect(() => {
    localStorage.setItem('position', position);
  }, [position]);

  useEffect(() => {
    localStorage.setItem('company', company);
  }, [company]);

  useEffect(() => {
    localStorage.setItem('companyCity', companyCity);
  }, [companyCity]);

  return(
    <div className='form'>
      <h2>Work Experience</h2>
      <div className="position">
        <label className="form-label" htmlFor="position">Position </label>
        <input 
          type="position"
          value={position}
          name="position"
          id="position"  
          className="form-input"
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
      <div className="company">
        <label className="form-label" htmlFor="company">Company </label>
        <input  
          type="text" 
          value={company}
          name="company"
          id="company"  
          className="form-input"
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="university-city">
        <label className="form-label" htmlFor="companyCity">City </label>
        <input  
          type="text"
          value={companyCity}
          name="companyCity"
          id="university-city"
          className="form-input"
          onChange={(e) => setCompanyCity(e.target.value)}
        />
      </div>
    </div>
  )

}

export default Experience;