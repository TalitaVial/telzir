import React from 'react';
import {TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import dados from '../data/dados.json';

const style = {
  typography: {textAlign: 'center', color:'#3b83bd'},
  tableRow: {background: '#87ceeb'},
  tableCell: {background: '#3b83bd', textColor: '#ffffff'}
}

function TableTariff(){
 return(
   <TableContainer>
     <Typography sx={style.typography} component="h1" variant="h2">TELZIR</Typography>
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