import React from 'react';
import {TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import dados from '../data/dados.json';

const style = {
  tableRow: {background: '#87ceeb'},
  tableCell: {background: '#3b83bd', textColor: '#ffffff'}
}

function TableTariff(){
 return(
   <TableContainer  >
     <TableHead>
       <TableRow sx={style.tableCell}>
       <TableCell >DDD - Origem</TableCell>
       <TableCell>DDD - Destino</TableCell>
       <TableCell>Tarifa por minuto</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
       {dados.map((dado, index) =>(
        <TableRow sx={style.tableRow}>
         <TableCell key={index}>{dado.origem}</TableCell>
          <TableCell key={index}>{dado.destino}</TableCell>
          <TableCell key={index}>{dado.valor}</TableCell>
       </TableRow>
       ))}
     </TableBody>
   </TableContainer>
 )
}

export default TableTariff