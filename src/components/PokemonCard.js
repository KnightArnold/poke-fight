import React from 'react'
import { Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        cursor: 'pointer',
        backgroundColor: 'black !important',
        color: 'white !important',
        '&:hover': {
            backgroundColor: 'rgb(90,90,90) !important'
        }
    },
    cardMedia: {
        margin: 'auto',
        width: 130,
        height: 130,
    },
    cardContent: {
        textAlign: 'center'
    }
}));

export default function PokemonCard(props) {
    const classes = useStyles();
    const { pokemon, image } = props
    const { id, name } = pokemon
  return (
    <Grid2 xs={12} sm={2} key={id}>
        <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={image}></CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    </Grid2>
  )
}
