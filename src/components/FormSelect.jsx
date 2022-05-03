import { FormControl, Grid, NativeSelect, Typography } from '@mui/material';
import React from 'react';
import dados from '../data/dados.json'


function FormSelect(){

  function handleSelectOrigem(event){
    const origem = event.target.value
    console.log(origem)
  }

  function handleSelectDestino(event){
    const destino = event.target.value
    console.log(destino)
  }

  return (
    <Grid container spacing={6}>
      <Grid item>
        <FormControl>
          <Typography color="primary">DDD de Origem</Typography>
          <NativeSelect variant='filled' onChange={handleSelectOrigem}>
            <option value=""></option>
            {dados.map((dado, index) => (
            <option key={index}>{dado.origem}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <Typography color="primary">DDD de Destino</Typography>
          <NativeSelect variant='filled' onChange={handleSelectDestino}>
            <option value=""></option>
            {dados.map((dado, index) => (
            <option key={index}>{dado.destino}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default FormSelect