import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function DialogBattle(props) {    
  let namePokeSelected = props.props[0];
  let namePokeRanking = props.props[1];
  let firstPokeSelected = props.props[2];
  let secondPokeSelected = props.props[3];
  let thirdPokeSelected = props.props[4];
  let firstPokeRanking = props.props[5];
  let secondPokeRanking = props.props[6];
  let thirdPokeRanking = props.props[7];
  return (
    <Box>      
      <div>
      <label>{namePokeSelected}</label>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        value={firstPokeSelected}
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        value={secondPokeSelected}
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        value={thirdPokeSelected}
        variant="filled"
        size="small"
      />
      </div>
      <div>
      <label>{namePokeRanking}</label>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        value={firstPokeRanking}
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        value={secondPokeRanking}
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        value={thirdPokeRanking}
        variant="filled"
        size="small"
      />
      </div>
    </Box>
  )
}
