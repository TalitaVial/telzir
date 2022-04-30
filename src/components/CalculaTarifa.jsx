import { FormControl, InputLabel, Select } from '@mui/material';
import React from 'react';

function CalculaTarifa(){
  return (
    <FormControl fullWidth>
      <InputLabel id='dddOrigem'>DDD-Origem</InputLabel>
      <Select labelId='dddOrigem'></Select>
    </FormControl>
    
  )
}

export default CalculaTarifa