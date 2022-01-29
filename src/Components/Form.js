import React from 'react';
import {FormItemSingle} from './FormItemSingle'
import {FormItemSelect} from './FormItemSelect'

export const Form = ({form, handleChange, handleSubmit}) => {
	return (
		<form className="form" onSubmit={handleSubmit}>
            <FormItemSingle 
                className="w-100 formItem" 
                value={form.initial} 
                name={"initial"} 
                handleChange={handleChange} 
              	title={"inversion inicial"}
            />
            <div className="formGroup my">
              	<FormItemSingle 
                	className="w-50 formItem" 
                	value={form.porc} 
                	name={"porc"} 
                	handleChange={handleChange} 
                	title={"% Interes Anual"}
              	/>
              	<FormItemSelect 
                	className="w-50 formItem" 
                	value={form.timeInt} 
                	name={"timeInt"} 
                	handleChange={handleChange} 
                	title={"Retorno de interes"}
                />
            </div>
            <div className="formGroup my">
              	<FormItemSingle 
                	className="w-50 formItem" 
                	value={form.prima} 
                	name={"prima"} 
                	handleChange={handleChange} 
                	title={"Abono"}
                />
                <FormItemSelect 
                	className="w-50 formItem" 
                	value={form.timePrima} 
                	name={"timePrima"} 
                	handleChange={handleChange} 
                	title={"Periodo"}
                />
            </div>
            <label htmlFor="lapso" className="w-100">Lapso Tiempo a Calcular</label>
            <div className="formGroup">
                <FormItemSingle 
                	className="w-50 formItem" 
                	value={form.lapso} 
                	name={"lapso"} 
                	handleChange={handleChange} 
                	unlabel
                />
                <FormItemSelect 
                	className="w-50 formItem" 
                	value={form.timeLapso} 
                	name={"timeLapso"} 
                	handleChange={handleChange} 
                	unlabel
                	short
              	/>
            	</div>
            	<button type="submit" className="my">Calcular</button>
            </form>
	)
}