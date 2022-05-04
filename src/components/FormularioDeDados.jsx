import { Button, FormControl, NativeSelect, Typography, Grid } from '@mui/material';
import React from 'react';
import dados from '../data/dados.json'
import planos from "../data/planos.json"

function FormularioDeDados(){
  const calcularTarifaSemPlano =(tarifa, tempoChamada)=>{
    return tarifa * tempoChamada
  }

  const calcularTarifaComPlano = (tarifa, tempoPlano, tempoChamada)=>{

    return tempoChamada<tempoPlano? 0 : tarifa * (tempoChamada - tempoPlano)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const tarifa = e.target['dddd'].value
    const tempoPlano = e.target['tempoplano'].value
    const tempoChamada = e.target['tempo'].value

    calcularTarifaComPlano(tarifa, tempoPlano, tempoChamada)
    calcularTarifaSemPlano(tarifa, tempoChamada)
    
    }

  return (
    <Grid container >
    <form onSubmit={handleSubmit}>
      <Grid item>
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
      </Grid>
      <FormControl>
        <Typography color="primary">Informe seu Plano</Typography>
        <NativeSelect id='tempoplano'>
        <option value=""></option>
        {planos.map((plano, index) => (
          <option value={plano.tempoplano} key={index} >{plano.plano}</option>
        ))}
        </NativeSelect>
      </FormControl>
      <Grid item>
      <input placeholder='Tempo da chamada' type="number" id="tempo"/>
      </Grid>
      <Button variant="outlined" type="submit">Calcular</Button>
    </form>
    </Grid>
  )}

export default FormularioDeDados