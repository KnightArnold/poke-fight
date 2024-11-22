import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { POKEMON_API_URL } from "../config";
import { makeStyles } from "@mui/styles";
import { Box, Button, CircularProgress, Grid2, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { useLocalStorage } from "../customhooks/useLocalStorage";

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
    },
    link: {
        textDecoration: 'none !important'
    }
  }))

export default function PokemonDetails() {
    const { setItem } = useLocalStorage('pokemonSelected');
    const classes = useStyles();
    const { id } = useParams();
    const [pokemonSelected, setPokemonSelected] = useState(null);
    useEffect(() => {
        axios.get(POKEMON_API_URL + "/" + id).then((response) => {
            if(response.status >= 200 && response.status < 300) {                
                setPokemonSelected(response.data);
            }
        })
    }, []);

    if (pokemonSelected) {
        setItem(pokemonSelected);
    }

  return (
    <Box>
        {pokemonSelected ? (
            <Box className={classes.pokefightContainer}>
                <Typography className={classes.textTitle} variant="h1">
                    {pokemonSelected.name}
                </Typography>
                <img className={classes.pokemonImage} src={pokemonSelected.sprites.front_default}/>                
                <Box className={classes.pokemonInfoContainer}>
                    <hr className={classes.separator} />
                    <Grid2 container>
                        <Grid2 md={1}>
                            <Link to={"/battle/"} className={classes.link}>
                                <Button className={classes.favourite}>
                                    Comenzar desafio
                                </Button>
                            </Link>
                            
                        </Grid2>
                        <Grid2 md={2}>
                            <Typography className={classes.text}>
                                Name
                                <br />
                                {pokemonSelected.name}
                            </Typography>
                        </Grid2>
                        <Grid2 md={2}>
                            <Typography className={classes.text}>
                                Height
                                <br />
                                {pokemonSelected.height}m
                            </Typography>
                        </Grid2>
                        <Grid2 md={2}>
                            <Typography className={classes.text}>
                                Weight
                                <br />
                                {pokemonSelected.weight}kg
                            </Typography>
                        </Grid2>
                        {pokemonSelected.types.map((pokemonType) => {                            
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
