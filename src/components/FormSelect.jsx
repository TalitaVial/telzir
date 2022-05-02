import { FormControl, NativeSelect, Typography } from '@mui/material';
import React from 'react';
import dados from '../data/dados.json'

function FormSelect(){
  return (
    <>
      <FormControl>
      <Typography>DDD de Origem</Typography>
      <NativeSelect variant='filled'>
        {dados.map((dado, index) => (
           <option key={index}>{dado.origem}</option>
        ))}
      </NativeSelect>
      </FormControl>
      <FormControl>
      <Typography>DDD de Destino</Typography>
       <NativeSelect variant='filled'>
        {dados.map((dado, index) => (
           <option key={index}>{dado.origem}</option>
        ))}
      </NativeSelect>
      </FormControl>
    </>

  )
}

export default FormSelect