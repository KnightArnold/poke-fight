import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
 AppBar: {
    backgroundColor: 'black !important',
 },
 link: {
    textDecoration: 'none !important',
 },
 title: {
    cursor: 'pointer',
    color: 'white'
 }
}))

export default function AppNavigator() {
    const classes = useStyles();
    return (
    <AppBar className={classes.AppBar} position="fixed" >
        <Toolbar>
            <Link to='/' className={classes.link}>
                <Typography className={classes.title} variant="h6">Lista de Pokemones</Typography>
            </Link>
        </Toolbar>
    </AppBar>
  )
}
