import { FormControl, NativeSelect, Typography } from '@mui/material';
import React from 'react';
import dados from '../data/dados.json'
import planos from "../data/planos.json"

function FormSelect(){
  return (
    <form onSubmit={(e)=>{e.preventDefault()
      console.log(e.target['ddd'].value, e.target['dddd'].value)}}>
      <FormControl>
        <Typography color="primary">DDD de Origem</Typography>
          <NativeSelect variant='filled' id='ddd'>
            <option value=""></option>
            {dados.map((dado, index) => (
            <option value={dado.valor} key={index}>{dado.origem}</option>
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
      <input placeholder='Tempo da chamada' type="number" id="tempo"/>
      <FormControl>
        <Typography color="primary">Informe seu Plano</Typography>
        <NativeSelect>
        <option value=""></option>
        {planos.map(plano => (
          <option >{plano.plano}</option>
        ))}
        </NativeSelect>
      </FormControl>
      <input value="enviar" type="submit"/>
    </form>

  )}

export default FormSelect