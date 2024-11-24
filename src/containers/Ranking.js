import React from 'react';
import { CircularProgress } from "@mui/material";
import { useLocalStorage } from "../customhooks/useLocalStorage";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Ranking() {    
    const { getItem } = useLocalStorage('pokemonData');
    let results = getItem();
    results = results.sort(function(a, b) { 
        return b.points - a.points
      });
    return (
    <>
      {results ? (        
          <TableContainer component={Paper} style={{ marginTop: 70, padding: 0 }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Ranking</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Points</TableCell>                  
                </TableRow>
              </TableHead>
              <TableBody>
                {results.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                    
                  >
                    <TableCell component="th" scope="row">
                      {index+1}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right"><img style={{ width: 50, height: 50 }} src={row.url} alt="pokemon ranked"/> </TableCell>
                    <TableCell align="right">{row.points}</TableCell>                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>                
        ) : (
          <CircularProgress style={{ marginTop: 100 }}/>
        )}
    </>
    
  )
}
