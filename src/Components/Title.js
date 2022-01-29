import React from 'react';

export const Title = ({setOpenHelp, openHelp}) => {
	return (
		<div className="title">
          <span>Calculadora de Interes Compuesto</span>
          <i onClick={(() => setOpenHelp(!openHelp))}><span>{openHelp?"x":"?"}</span></i>
        </div>
	)
}