import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Grid2 } from "@mui/material";
import PokemonCard from '../components/PokemonCard';
import { makeStyles } from "@mui/styles";
import { useLocalStorage } from "../customhooks/useLocalStorage";

const useStyles = makeStyles((theme) => ({
    pokefightContainer: {
      textAlign: 'center',
      padding: '70px 10px 0px 10px',
      backgroundColor: 'rgb(68,68,68)'
    }
  }))

export default function Ranking() {
    const classes = useStyles();
    const { getItem } = useLocalStorage('pokemonData');
    let results = getItem();
    results = results.sort(function(a, b) { 
        return a.rankingTop - b.rankingTop 
      });
    return (
    <Box>
        {results ? (
          <Grid2 className={classes.pokefightContainer} container spacing= {2}>
          {results.map((pokemon) => {
            return (
              <PokemonCard key={pokemon.id} pokemon={pokemon} image={pokemon.url} isRanking = {true} rankingTop = {pokemon.rankingTop}/>
            )
          })}
        </Grid2>
        ) : (
          <CircularProgress style={{ marginTop: 100 }}/>
        )}         
    </Box>
  )
}
