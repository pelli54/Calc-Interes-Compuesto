import React from 'react';

export const FormItemSingle = ({value, handleChange, name, title, className, unlabel}) => {
	return (
		<div className={className}>
          {!unlabel&&<label htmlFor={name} >{title}</label>}
          <input id={name} type="number" name={name} value={value} onChange={handleChange} /> 
        </div>
	)
}