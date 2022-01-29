import React from 'react';

export const FormItemSelect = ({value, handleChange, name, title, className, short, unlabel}) => {
	return (
		<div className={className}>
            {!unlabel&&<label htmlFor={name} >{title}</label>}
            <select id={name} name={name} onChange={handleChange} value={value} >
        		<option value="1">{short?"Dias":"Diario"}</option>
        		{!short&&<option value="3">3 Dias</option>}
        		<option value="7">{short?"Semanas":"Semanal"}</option>
        		{!short&&<option value="15" >Quincenal</option>}
        		{!short&&<option value="21">3 Semanas</option>}
        		<option value="31">{short?"Meses":"Mensual"}</option>
        		{!short&&<option value="93">3 Meses</option>}
        		{!short&&<option value="186">6 Meses</option>}
        		<option value="365">{short?"Años":"Anual"}</option>
            </select>
        </div>
        
	)
}