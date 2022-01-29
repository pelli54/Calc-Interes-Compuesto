import React from 'react';

export const ResultDetails = ({result, className}) => {
	return (
		<div className={className}>
            <span>Inicial: {parseFloat(result[0][0]).toFixed(2)}</span>
            <span>Final: {parseFloat(result[0][result[0].length-1]).toFixed(2)}</span>
            <span>Diff: {parseFloat(result[0][result[0].length-1] - result[0][0]).toFixed(2)}</span>
        </div>		
	)
}


