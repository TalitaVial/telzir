
import React from 'react';
import { FormControl, NativeSelect, Typography} from '@mui/material';
import planos from "../data/planos.json"


function SelectPlan(){

  function handleSelectPlano(event){
    let plano = event.target.value
    console.log(plano)
  }

  return(
    <FormControl>
      <Typography color="primary">Informe seu Plano</Typography>
      <NativeSelect onChange={handleSelectPlano}>
        <option value=""></option>
        {planos.map(plano => (
          <option>{plano.plano}</option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default SelectPlan