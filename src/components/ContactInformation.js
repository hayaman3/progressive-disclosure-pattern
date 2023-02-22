import React, { useState, useEffect } from 'react';
import getLocalStorageData from './handleLocalStorage';

const ContactInformation = () => {
  const [phoneNumber, setPhoneNumber] = useState(getLocalStorageData("phoneNumber"));
  const [email, setEmail] = useState(getLocalStorageData("email"));

  useEffect(() => {
    localStorage.setItem('phoneNumber', phoneNumber);
  }, [phoneNumber]);

  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email]);

  return(
    <div className='form'>

      <h2>Contact Information</h2>

      <div className="phone">
        <label className="form-label" htmlFor="phone">Phone </label>
        <input  
          type="tel"
          value={phoneNumber}
          name="phone"
          id="phone"
          className="form-input"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div className="email">
        <label className="form-label" htmlFor="email">Email </label>
        <input  
          type="text" 
          value={email}
          name="email"
          id="email"  
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

    </div>
  )

}

export default ContactInformation;