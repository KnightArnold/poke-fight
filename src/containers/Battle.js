import React, {useState} from 'react'
import { useLocalStorage } from "../customhooks/useLocalStorage";
import { useParams, useNavigate } from "react-router-dom";
import "./Battle.css";
import Pokemon from "../components/Pokemon";
import executePlayTennis from "../utils/ExecutePlayTennis";
import { Box, Button, Card, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
    card: {
        cursor: 'pointer',
        backgroundColor: 'black !important',
        color: 'white !important',
        '&:hover': {
            backgroundColor: 'rgb(90,90,90) !important'
        },
        padding: '10px',
        marginRight: '5px'
    },
}));


export default function Battle() {
    const navigate = useNavigate();
    const { idRankingSelected } = useParams();
    const pokemonSelected = useLocalStorage('pokemonSelected');
    const pokemonPrincipal = pokemonSelected.getItem()

    const rankingPokemon = useLocalStorage('pokemonData');
    const rankingList = rankingPokemon.getItem();  
    const pokemonContender = rankingList.filter(entry => entry.id !== pokemonPrincipal.id)[idRankingSelected]; 

    const [scorex1, setScorex1] = useState(0);
    const [scorex2, setScorex2] = useState(0);
    const [scorex3, setScorex3] = useState(0);
    const [scorey1, setScorey1] = useState(0);
    const [scorey2, setScorey2] = useState(0);
    const [scorey3, setScorey3] = useState(0);

    const [show, setShow] = useState(true);
    const hideButton = () => {
        setShow(false);
    };

    const handleClickRanking = () => {
        navigate("/ranking/");
    }

    const classes = useStyles();    
    const pokemonPlayTennis = () => {
        const {pokeSelectedWin, pokeRankingWin, x1,x2,x3,y1,y2,y3} = executePlayTennis();
        setScorex1(x1);
        setScorex2(x2);
        setScorex3(x3);
        setScorey1(y1);
        setScorey2(y2);
        setScorey3(y3);    
        
        if(pokeSelectedWin) {            
            toast(pokemonPrincipal.name + ' Wins!', { autoClose: false });
            if (rankingList.filter(entry => entry.id === pokemonPrincipal.id).length > 0) {
                rankingList.forEach(element => {
                    if (element.id === pokemonPrincipal.id) {
                        element.points = element.points - 1; 
                    }
                    if (element.id === pokemonContender.id) {
                        element.points = element.points + 1; 
                    }
                })
            } else {
                rankingList.forEach(element => {                    
                    if (element.id === pokemonContender.id) {
                        element.points = element.points - 1; 
                    }
                });
                let pokemonObject = {
                    id: pokemonPrincipal.id,
                    url: pokemonPrincipal.sprites.front_default,
                    name: pokemonPrincipal.name,
                    points: pokemonContender.points + 2
                  }
                rankingList.push(pokemonObject);  
            }
            rankingPokemon.setItem(rankingList);
        }
        
        if(pokeRankingWin) {            
            toast(pokemonContender.name + ' Wins!', { autoClose: false });
            if (rankingList.filter(entry => entry.id === pokemonPrincipal.id).length > 0) {
                rankingList.forEach(element => {
                    if (element.id === pokemonPrincipal.id) {
                        element.points = element.points + 1; 
                    }
                    if (element.id === pokemonContender.id) {
                        element.points = element.points - 1; 
                    }
                })
            } else {
                rankingList.forEach(element => {                    
                    if (element.id === pokemonContender.id) {
                        element.points = element.points + 1; 
                    }
                });
                let pokemonObject = {
                    id: pokemonPrincipal.id,
                    url: pokemonPrincipal.sprites.front_default,
                    name: pokemonPrincipal.name,
                    points: pokemonContender.points - 2
                  }
                rankingList.push(pokemonObject);  
            }
            rankingPokemon.setItem(rankingList);
        }
    }       

  return (
    <>
        <div className="container">
            <Pokemon name={pokemonPrincipal.name} img={pokemonPrincipal.sprites.front_default} />
            <Typography variant="h2" color="error" style={{ fontFamily: "Caveat" }}>VS</Typography>
            <Pokemon name={pokemonContender.name} img={pokemonContender.url} /> 
            <Box>
                {show &&
                    <Button 
                        variant="contained" 
                        color="success" 
                        size="large" 
                        onClick={() => {
                            pokemonPlayTennis();
                            hideButton();
                        }} 
                    >Play</Button>
                }
                {!show &&
                    <Button variant="contained" onClick={handleClickRanking} >
                        Ver ranking
                    </Button>
                }                        
            </Box>                       
            <Stack direction="row">
                <Card className={classes.card}>
                    <Typography variant="h4" gutterBottom >{pokemonPrincipal.name}</Typography>
                    <Typography variant="h4" gutterBottom >{pokemonContender.name}</Typography>
                </Card>
                <Card className={classes.card}>                
                    <Typography variant="h4" gutterBottom >{scorex1}</Typography>
                    <Typography variant="h4" gutterBottom >{scorey1}</Typography>                                
                </Card>
                <Card className={classes.card}>
                    <Typography variant="h4" gutterBottom >{scorex2}</Typography>
                    <Typography variant="h4" gutterBottom >{scorey2}</Typography>
                </Card>
                <Card className={classes.card}>
                    <Typography variant="h4" gutterBottom >{scorex3}</Typography>
                    <Typography variant="h4" gutterBottom >{scorey3}</Typography>
                </Card>
            </Stack>        
        </div>
    </>    
  )
}
