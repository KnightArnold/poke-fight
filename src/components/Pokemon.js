import React from 'react'
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import './Pokemon.css'

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
  },
  link: {
      textDecoration: 'none !important'
  }
}));

const Pokemon = ({name, img}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={img}></CardMedia>
        <CardContent className={classes.cardContent}>
            <Typography variant="h4" gutterBottom>
                {name}
            </Typography>            
        </CardContent>
    </Card>
  )
}

export default Pokemon