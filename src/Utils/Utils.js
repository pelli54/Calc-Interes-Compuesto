const isDayToPay = (acc, day) => {
	return acc%day===0 && acc>0?true:false
}

const isPar = (num) =>{
return num%2===0?true:false
}

const isAdd = (num, prev) => {
return num-prev!==0?true:false
}

export {isDayToPay, isPar, isAdd}