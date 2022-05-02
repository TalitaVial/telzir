
import React from 'react';
import { FormControl, NativeSelect, Typography} from '@mui/material';
import planos from "../data/planos.json"


function SelectPlan(){
  return(
    <FormControl>
      <Typography>Informe seu Plano</Typography>
      <NativeSelect>
        {planos.map(plano => (
          <option>{plano.plano}</option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default SelectPlan