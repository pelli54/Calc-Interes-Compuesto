import React from 'react';

export default function Help() {
	return (
		<div className="helpContainer">
	      <h3>Bienvenido a esta pequena App</h3>
	      <p>con esta aplicacion podras calcular el interes que genera tus ahorros de forma compuesta hasta cierto tiempo. esto quiere decir que la inversion que se ingrese en alguna entidad financiera que ofrezca algun interes anual se puede adicionar a la inversion original, de forma que el proximo pago de interes será en base a la inversion original mas los intereses anteriores. Es comun que las personas que ahorren de esta manera hagan un Abono periodicamente de forma que tambien se añadirá al ahorro acumulado.</p>
	      <h4>¿Como Usar?</h4> 
	      <p>#El primer Parametro es la inversion original o initial. Es un valor numerico sin la unidad monetaria. Por defecto es 100</p>
	      <p>#El segundo parametro es la taza de interes Anualizado, el interes que te ofrece la intidad financiera en un año, en el caso de que su interes no sea Anual debe transformarlo a anual, es decir, si su interes es de 1% mensual debe multiplicarlo po 12 (meses) para que sea 12% de interes Anual. por defecto es 10%</p>
	      <p>#El tercer parametro es el periodo de tiempo en el que su entidad financiera le paga el interes equivalente a ese periodo de tiempo, es decir, si su interes Anual es de 12% y se paga mensualmente quiere decir que cada mes se pagará un 1% de interes de su ahorro. Por Defecto es Diario (1 Dia)</p>
	      <p>#El cuarto parametro es el Abono, la cantidad de dinero que se ingresara a su cuenta de ahorra cada cierto tiempo, por defecto es cero (0)</p>
	      <p>#El quinto parametro es el periodo de tiempo que se hará un abono a su cuenta de ahorros, es decir, si selecciona Quincenal se añadirá la cantidad de dinero especificada en el campo anterior cada quincena (15 dias)</p>
	      <p>#El ultimo campo es para especificar la cantidad de tiempo en que se hara su estudio, por ejemplo, si en el primer campo coloca seis (6) y en el segundo selecciona Meses quiere decir que el estudio de su interes se hara para los proximos 6 meses (186 dias) </p>
	      <h4>Los Resultados:</h4>
	      <p>luego de suministrar todos los datos en el formulario y hacer click en el boton de Calcular, en la seccion de resultados se mostrara:</p>
	      <p>#En unos recuadros verdes: la inversion inicial, la cantidad de dinero al final del  estudio, y la diferencia de dinero entre la cantidad final y la cantidad inicial </p>
	      <p>#Seguido, una tabla, en la primera columna el dia, en la segunda columna la cantidad de dinero en ese dia en especifico, en la tercera columna la cantidad adicionada proveniente de los intereses, en la ultima la cantidad de dinero adicionada proveniente de los abonos periodicos </p>
	      <p>#cada vez que si añade dinero a la cuenta aparecerá de color verde y con el signo de mas (+) el principio</p>
	      <p>Espero que les haya gustado y servido la aplicacion. si quieres conocer el codigo fuente de esta aplicacion visita el repositorio de github: github.com pelli54 calculadoraInteresCompuesto --aplicacion creada por Pelli54-- </p>
	    </div>
	)
}