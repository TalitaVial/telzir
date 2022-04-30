import React from 'react';
import {TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {dados} from '../data/dados.json';


function TableTariff(){
 return(
   <TableContainer>
     <TableHead>
       <TableRow>
       <TableCell>DDD - Origem</TableCell>
       <TableCell>DDD - Destino</TableCell>
       <TableCell>Tarifa por minuto</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
       {dados.map(dado =>(
        <TableRow>
         <TableCell>{dado.origem}</TableCell>
          <TableCell>{dado.destino}</TableCell>
          <TableCell>{dado.valor}</TableCell>
       </TableRow>
       ))}
     </TableBody>
   </TableContainer>
 )
}

export default TableTariff