import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { POKEMON_API_URL } from "../config";
import { makeStyles } from "@mui/styles";
import { Box, Button, CircularProgress, Grid2, Typography } from '@mui/material';
import { Favorite } from '@mui/icons-material';


const useStyles = makeStyles((theme) => ({
    pokefightContainer: {
      height: '80vh',
      backgroundColor: 'black',
      color: 'white !important',
      marginTop: 75,
      textAlign: 'center',
      borderRadius: 5,
      paddingTop: 30
    },
    textTitle: {
        textTransform: 'upperCase !important',
        fontFamily: 'Fantasy !important'
    },
    pokemonImage: {
        width: '170px',
        height: '170px'
    },
    pokemonInfoContainer: {
        bottom: -150,
        position: 'relative !important',
        backgroundColor: 'black',      
    },
    separator: {
        height: '0.01mm',
        width: '95% !important'
    },
    favourite: {
        height: 50,
        width: 50,
        marginTop: 15,
        marginLeft: '20px !important'
    },
    text: {
        fontSize: 30,
        marginLeft: '200px !important'
    }
  }))

export default function PokemonDetails() {
    const classes = useStyles();
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    useEffect(() => {
        axios.get(POKEMON_API_URL + "/" + id).then((response) => {
            if(response.status >= 200 && response.status < 300) {                
                setPokemonData(response.data);
            }
        })
    }, []);

  return (
    <Box>
        {pokemonData ? (
            <Box className={classes.pokefightContainer}>
                <Typography className={classes.textTitle} variant="h1">
                    {pokemonData.name}
                </Typography>
                <img className={classes.pokemonImage} src={pokemonData.sprites.front_default}/>                
                <Box className={classes.pokemonInfoContainer}>
                    <hr className={classes.separator} />
                    <Grid2 container>
                        <Grid2 md={1}>
                            <Button className={classes.favourite}>
                                <Favorite style={{ color: "white", fontSize: 35 }} />
                            </Button>
                        </Grid2>
                        <Grid2 md={2}>
                            <Typography className={classes.text}>
                                Name
                                <br />
                                {pokemonData.name}
                            </Typography>
                        </Grid2>
                        <Grid2 md={2}>
                            <Typography className={classes.text}>
                                Height
                                <br />
                                {pokemonData.height}m
                            </Typography>
                        </Grid2>
                        <Grid2 md={2}>
                            <Typography className={classes.text}>
                                Weight
                                <br />
                                {pokemonData.weight}kg
                            </Typography>
                        </Grid2>
                        {pokemonData.types.map((pokemonType) => {                            
                            const { name } = pokemonType.type;
                            return (
                                <Grid2 md={2}>
                                    <Typography className={classes.text}>
                                        Type
                                        <br />
                                        {name}
                                    </Typography>
                                </Grid2>
                            )
                        })}
                    </Grid2>
                </Box>
            </Box>
        ) : (
          <CircularProgress style={{ marginTop: 100 }}/>
        )}         
    </Box>
  )
}
