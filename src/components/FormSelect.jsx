import { FormControl, NativeSelect, Typography } from '@mui/material';
import React, { useState } from 'react';
import dados from '../data/dados.json'
import planos from "../data/planos.json"

function FormSelect(){

  const [tempo, setTempo] = useState("")

  return (
    <form onSubmit={(e)=>{e.preventDefault()
      const tarifa = (e.target['dddd'].value)
      const tempoPlano = (e.target['tempoplano'].value)
      console.log(tarifa)
      console.log(tempo)
      console.log(tempoPlano)
    
      }}>
      <FormControl>
        <Typography color="primary">DDD de Origem</Typography>
          <NativeSelect variant='filled' id='ddd'>
            <option value=""></option>
            {dados.map((dado, index) => (
            <option key={index}>{dado.origem}</option>
            ))}
          </NativeSelect>
      </FormControl>
      <FormControl>
        <Typography color="primary">DDD de Destino</Typography>
        <NativeSelect variant='filled' id='dddd'>
          <option value=""></option>
          {dados.map((dado, index) => (
          <option value={dado.valor} key={index}>{dado.destino}</option>
          ))}
        </NativeSelect>
      </FormControl>
      <input placeholder='Tempo da chamada' type="number" id="tempo" value={tempo} onChange={(event)=>{
        let temp = event.target.value
        setTempo(temp)
      }}/>
      <FormControl>
        <Typography color="primary">Informe seu Plano</Typography>
        <NativeSelect id='tempoplano'>
        <option value=""></option>
        {planos.map((plano, index) => (
          <option value={plano.tempoplano} key={index} >{plano.plano}</option>
        ))}
        </NativeSelect>
      </FormControl>
      <input value="enviar" type="submit"/>
    </form>

  )}

export default FormSelect