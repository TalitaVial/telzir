import React from 'react';
import {TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import dados from '../data/dados.json';


function TabelaDeTarifa(){
 return(
   <TableContainer>
        <Typography color="primary"
        component="h2"
        variant="h4">Tarifas fixas</Typography>
     <TableHead>
       <TableRow>
       <TableCell >DDD - Origem</TableCell>
       <TableCell>DDD - Destino</TableCell>
       <TableCell>Tarifa por minuto</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
       {dados.map((dado, index) =>(
        <TableRow>
         <TableCell key={index}>{dado.origem}</TableCell>
          <TableCell key={index}>{dado.destino}</TableCell>
          <TableCell key={index}>{dado.valor}</TableCell>
       </TableRow>
       ))}
     </TableBody>
   </TableContainer>
 )
}

export default TabelaDeTarifa;