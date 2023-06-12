import React from 'react';

export default function Alternative({ handleRadioChange, selectedValue, text }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input" type="radio" name="flexRadioDefault" id={text} 
        value={text} checked={selectedValue === text} onChange={handleRadioChange}
      />
      <label className="form-check-label" htmlFor={text}>
        {text}
      </label>
    </div>
  );
}