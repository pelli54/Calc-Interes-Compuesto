import React from 'react';

export const Table = ({result, isPar, isAdd, isDayToPay}) => {
	return (
	<table>
        <thead>
            <tr>
				<th className="first">Dia</th>
                <th>Dinero</th>
                <th>Interes</th>
                <th>Abono</th>
            </tr>
          </thead>
          <tbody>
	        {
	            result[0].map((a,i) => (
	                <tr key={i} className={isPar(i)?"bg-2":"bg-1"}>
	                    <th>{i}</th>
	                    <td>{parseFloat(a).toFixed(3)}</td>
	                    <td className={isAdd(a,result[0][i-1]) && isDayToPay(i, result[1].timeInt) && i>0?"add":""} >
	                    	{isAdd(a,result[0][i-1])&&i>0?"+":""}
	                    	{i>0?(isDayToPay(i, result[1].timePrima)?a-result[0][i-1]-result[1].prima:a-result[0][i-1]).toFixed(3):parseFloat(0.000).toFixed(3)}
	                    </td>
	                    <td className={isDayToPay(i, result[1].timePrima) && i>0 && result[1].prima?"add":""} >
	                    	{isDayToPay(i,result[1].timePrima) && i>0 && result[1].prima>0?"+":""}
	                     	{i>0 && isDayToPay(i,result[1].timePrima)?parseFloat(result[1].prima).toFixed(3):parseFloat(0.000).toFixed(3)}
	                    </td>
	                </tr>
	            ))
	        }
          </tbody>
    </table>)
}