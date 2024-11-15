import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Grid2 } from "@mui/material";
import axios from "axios";
import { IMAGE_API_URL, POKEMON_API_URL } from "../config";
import PokemonCard from '../components/PokemonCard';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  pokefightContainer: {
    textAlign: 'center',
    padding: '70px 10px 0px 10px',
    backgroundColor: 'rgb(68,68,68)'
  }
}))

export default function Pokefight() {
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState(null);
    useEffect(() => {
        axios.get(POKEMON_API_URL + "?limit=800").then((response) => {
          if(response.status >= 200 && response.status < 300) {
            const { results } = response.data;
            let newPokemonData = [];
            results.forEach((pokemon, index) => {
              index++;
              let pokemonObject = {
                id: index,
                url: IMAGE_API_URL + index + '.png',
                name: pokemon.name
              }
              newPokemonData.push(pokemonObject);
            });
            setPokemonData(newPokemonData);
          }
        })
    }, []);
    
    return (
    <Box>
        {pokemonData ? (
          <Grid2 className={classes.pokefightContainer} container spacing= {2}>
          {pokemonData.map((pokemon) => {
            return (
              <PokemonCard key={pokemon.id} pokemon={pokemon} image={pokemon.url}/>
            )
          })}
        </Grid2>
        ) : (
          <CircularProgress style={{ marginTop: 100 }}/>
        )}         
    </Box>
  )
}
