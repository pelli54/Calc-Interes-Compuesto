import React from 'react';

export const FormItem = ({value, handleChange, name}) => {
	return (
		<div className=" formItem">
          <label htmlFor={name} >inversion inicial</label>
          <input id={name} type="number" name={name} value={value} onChange={handleChange} /> 
        </div>
	)
}