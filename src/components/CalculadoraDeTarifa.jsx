import React, { useState } from 'react';
import dados from '../data/dados.json';
import planos from '../data/planos.json';

import { Button, NativeSelect, Typography, Container, Card, Box, FormControl, Input} from '@mui/material';

const style = {
  container: {marginLeft: '8rem'},
  box: {display: 'flex', marginTop: '2rem', justifyContent: 'space-between', minWidth: 400, width: '40%' },
  card: {minWidth: 180, width: '45%', padding:'.3rem'},
  button: {width:'50%', margin: '2rem'},
  formControl: {minWidth: 180, width: '45%'}

}


function CalculadoraDeTarifa(){
  const [origemDDD, setOrigemDDD] = useState('')
  const [tarifa, setTarifa] = useState({semPlano: 0, comPlano: 0})

  const calcularTarifaSemPlano =(tarifa, tempoChamada)=>{
    return tarifa * tempoChamada
  }

  const calcularTarifaComPlano = (tarifa, tempoPlano, tempoChamada)=>{

    return tempoChamada<tempoPlano? 0 : tarifa * (tempoChamada - tempoPlano)
  }

  const handleSubmit=(e)=>{
    
    e.preventDefault()
    console.log(handleSubmit)
    const tarifa = e.target['dddd'].value
    const tempoPlano = e.target['tempoplano'].value
    const tempoChamada = e.target['tempo'].value

    const tarifaComPlano = calcularTarifaComPlano(tarifa, tempoPlano, tempoChamada)
    const tarifaSemPlano = calcularTarifaSemPlano(tarifa, tempoChamada)
    
    setTarifa({comPlano: tarifaComPlano, semPlano: tarifaSemPlano})
    }

  return (
    <Container sx={style.container}>
      <Typography color="primary"
        component="h2"
        variant="h4">Calcule sua Tarifa</Typography>
      <Box sx={style.box}>
        <Box>
        <Typography>Com Fale Mais: </Typography>
        <Card variant='outlined' sx={style.card}>{tarifa.comPlano.toLocaleString('pt-br',{style: 'currency',currency: 'BRL'})}</Card>
        </Box>
        <Box>
        <Typography>Sem Fale Mais: </Typography>
        <Card variant='outlined' sx={style.card}>{tarifa.semPlano.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Card>
        </Box>
      </Box>
      <form data-testid="form" onSubmit={handleSubmit}>
        <Box sx={style.box}>
          <FormControl sx={style.formControl}>
          <label for='ddd'>DDD de Origem: </label>
            <NativeSelect onChange={(e)=>{setOrigemDDD(e.target.value)}} variant='filled' id='ddd'>
              <option value=""></option>
              {dados.map((dado, index) => (
              <option key={index}>{dado.origem}</option>
              ))}
            </NativeSelect>
          </FormControl>
          <FormControl sx={style.formControl}>
          <label for="dddd">DDD de Destino: </label>
            <NativeSelect disabled={origemDDD === ""} variant='filled' id='dddd'>
              <option value=""></option>
              {dados.filter(d=>d.origem === origemDDD).map((dado, index) => (
              <option value={dado.valor} key={index}>{dado.destino}</option>
              ))}
            </NativeSelect>
          </FormControl>
        </Box>
        <Box sx={style.box}>
          <FormControl sx={style.formControl}>
            <label for="tempoplano">Informe seu Plano</label>
              <NativeSelect id='tempoplano'>
                <option value=""></option>
                {planos.map((plano, index) => (
                <option value={plano.tempoplano} key={index} >{plano.nome}</option>
                ))}
              </NativeSelect>
          </FormControl>
          <FormControl sx={style.formControl}>
          <label for="tempo">Tempo da Chamada: </label>
          <Input type="number" id="tempo"></Input>
          </FormControl>
        </Box>
        <Button sx={style.button} variant="outlined" type="submit">Calcular</Button>
      </form>
    </Container>
  )}

export default CalculadoraDeTarifa;