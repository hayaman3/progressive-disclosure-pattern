import React, { useState, useEffect } from 'react';
import getLocalStorageData from './handleLocalStorage';

const Personal = () => {
  const [firstName, setFirstName] = useState(getLocalStorageData("firstName"));
  const [lastName, setLastName] = useState(getLocalStorageData("lastName"));
  const [address, setAddress] = useState(getLocalStorageData("address"));
  const [description,setDescription] =useState(getLocalStorageData("description"))
  
  useEffect(() => {
    localStorage.setItem('firstName', firstName);
  }, [firstName]);

  useEffect(() => {
    localStorage.setItem('lastName', lastName);
  }, [lastName]);

  useEffect(() => {
    localStorage.setItem('address', address);
  }, [address]);

  useEffect(() => {
    localStorage.setItem('description', description);
  }, [description]);

  return(
    <div className='form'>
      <h2>Personal Information</h2>

      <div className="first-name">
        <label className="form-label" htmlFor="firstName">First Name </label>
        <input  
          type="text"
          value={firstName}
          name="firstName"
          id="first-name"  
          className="form-input"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="last-name">
        <label className="form-label" htmlFor="lastName">Last Name </label>
        <input  
          type="text"
          value={lastName}
          name="lastName"
          id="last-name"
          className="form-input"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="address">
        <label className="form-label" htmlFor="address">Address </label>
        <input  
          type="text"
          value={address}
          name="address"
          id="address"
          className="form-input"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="address">
        <textarea 
          id="description" 
          rows="5" 
          placeholder="Description..."
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
        >
        </textarea>
      </div>

    </div>
  )

}

export default Personal;