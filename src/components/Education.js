import React, { useState, useEffect } from 'react';
import getLocalStorageData from './handleLocalStorage';

const Education = () => {
  const [degree, setDegree] = useState(getLocalStorageData("degree"));
  const [university, setUniversity] = useState(getLocalStorageData("university"));
  const [universityCity, setUniversityCity] = useState(getLocalStorageData("universityCity"));

  useEffect(() => {
    localStorage.setItem('degree', degree);
  }, [degree]);

  useEffect(() => {
    localStorage.setItem('university', university);
  }, [university]);

  useEffect(() => {
    localStorage.setItem('universityCity', universityCity);
  }, [universityCity]);

  return(
    <div className='form'>
      <h2>Education</h2>
      <div className="degree">
        <label className="form-label" htmlFor="degree">Degree </label>
        <input 
          type="text"
          value={degree}
          name="degree"
          id="degree"  
          className="form-input"
          onChange={(e) => setDegree(e.target.value)}
        />
      </div>
      <div className="university">
        <label className="form-label" htmlFor="university">University </label>
        <input  
          type="text" 
          value={university}
          name="university"
          id="university"  
          className="form-input"
          onChange={(e) => setUniversity(e.target.value)}
        />
      </div>
      <div className="university-city">
        <label className="form-label" htmlFor="university-city">City </label>
        <input  
          type="text"
          value={universityCity}
          name="university-city"
          id="university-city"
          className="form-input"
          onChange={(e) => setUniversityCity(e.target.value)}
        />
      </div>
    </div>
  )

}

export default Education;