import React from 'react';
import './App.css'
import Help from './Components/Help'
import {Title} from './Components/Title'
import {Form} from './Components/Form'
import {ResultDetails} from './Components/ResultDetails'
import {Table} from './Components/Table'

import {isAdd, isPar, isDayToPay} from './Utils/Utils'
import InitialState from './Utils/InitialState'

function App() {

  const [form, setForm] = React.useState(InitialState)
  const [result, setResult] = React.useState([[]])
  const [mensaje, setMensaje] = React.useState("")
  const [openHelp, setOpenHelp] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(form.initial===0) {
      return setMensaje(
        "La inversion Inicial no debe ser Cero (0)");
    }
    if(form.timePrima>form.timeLapsoinDays && form.prima!==0) {
      return setMensaje(
        "El periodo de ingreso de la Prima NO debe ser mayor al tiempo del lapso de calculo ");
    }
    if(form.timeLapsoinDays===0) {
      return setMensaje(
        "El lapso de tiempo de estudio NO debe ser Cero (0)");
    }
    if(form.porc===0) {
      return setMensaje(
        "El porcentaje de interes Anual debe ser mayor a Cero");
    }
    let acc = 0 //se inicializa el contador
    let res = [form.initial] //se inicializa un array que almacana los resultados y se le asigna la inversion inicial como primervalor de la serie
    while(acc<form.timeLapsoinDays){
      res.push(
        res[acc] + //el siguiente valores el actual mas...
        (res[acc]*((acc+1)%form.timeInt===0?1:0)*form.interesDiario*form.timeInt)/100 + //al valor actual se multiplica por el porcentaje de interes, se determina si debe ser añadido el interes
        ((acc+1)%form.timePrima===0?1:0)*form.prima
      ) //se asigna el siguiente valor
      acc++
    }
    let newForm = {...form}
    setResult([res.map(a => a.toFixed(4)), newForm])
    setMensaje("")
  }

  const handleChange = (e) => {
    let newForm = {
      ...form,
      [e.target.name]:Math.abs(parseFloat(e.target.value))
    }
    newForm = {
      ...newForm,
      interesDiario: parseFloat(newForm.porc/365),
      timePrimainDays: parseFloat(newForm.timePrima*newForm.prima),
      timeLapsoinDays: parseFloat(newForm.lapso*newForm.timeLapso)
    }
    setForm(newForm)
  }

  return (
    <div className="container">
      <div className="content">
        <Title openHelp={openHelp} setOpenHelp={setOpenHelp} />
        {
          openHelp?<Help/>:
          <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
        }
      </div>

      <div className="result">
        {
          result[0].length!==0 && <ResultDetails className="details" result={result} />
        }
        <div className="table">
        {
          result[0].length>0?(
            <Table result={result} isPar={isPar} isAdd={isAdd} isDayToPay={isDayToPay} />
            ):<h3 className="noResult">Sin Resultados</h3>
        }
        </div>
        
      </div>
      {mensaje!==""?<div className="mensaje"><span>{mensaje}</span></div>:<div></div>}
    </div>  
  );
}

export default App;
