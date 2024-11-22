import React, { useState } from 'react'
import { useLocalStorage } from "../customhooks/useLocalStorage"
import "./Battle.css";
import Pokemon from "../components/Pokemon";

export default function Battle() {
    const pokemonSelected = useLocalStorage('pokemonSelected');
    const pokemonPrincipal = pokemonSelected.getItem()
    console.log('battle-pokemonSelected', pokemonSelected.getItem())

    const rankingPokemon = useLocalStorage('pokemonData');
    const rankingList = rankingPokemon.getItem();  
    const pokemonContender = rankingList.filter(entry => entry.id !== pokemonPrincipal.id)[8];  
    console.log('battle-rankingPokemon',rankingList[9]);
    
    const [pokemonRankingHP, setPokemonRankingHP] = useState(100);
    const [pokemonSelectedHP, setPokemonSelectedHP] = useState(120);

    const pokemonSelectedAttack = () => {
        setPokemonRankingHP(pokemonRankingHP - 30)
    }
    
    const pokemonRankingAttack = () => {
        setPokemonSelectedHP(pokemonSelectedHP - 25)
    }
      
    const container = document.querySelector('.container')
    
    if(pokemonRankingHP <= 0) {
        container.innerHTML = pokemonPrincipal.name + ' Wins!'
        if (rankingList.filter(entry => entry.id === pokemonPrincipal.id).length > 0) {
            rankingList.forEach(element => {
                if (element.id === pokemonPrincipal.id) {
                    element.rankingTop = element.rankingTop - 1; 
                }
                if (element.id === pokemonContender.id) {
                    element.rankingTop = element.rankingTop + 1; 
                }
            })
        } else {
            let pokemonObject = {
                id: pokemonPrincipal.id,
                url: pokemonPrincipal.sprites.front_default,
                name: pokemonPrincipal.name,
                rankingTop: pokemonContender.rankingTop
              }
            rankingList.push(pokemonObject);  
        }
        rankingPokemon.setItem(rankingList);
    }
    
    if(pokemonSelectedHP <= 0) {
        container.innerHTML = pokemonContender.name + ' Wins!'
        if (rankingList.filter(entry => entry.id === pokemonPrincipal.id).length > 0) {
            rankingList.forEach(element => {
                if (element.id === pokemonPrincipal.id) {
                    element.rankingTop = element.rankingTop + 1; 
                }
                if (element.id === pokemonContender.id) {
                    element.rankingTop = element.rankingTop - 1; 
                }
            })
        } else {
            let pokemonObject = {
                id: pokemonPrincipal.id,
                url: pokemonPrincipal.sprites.front_default,
                name: pokemonPrincipal.name,
                rankingTop: pokemonContender.rankingTop - 1
              }
            rankingList.push(pokemonObject);  
        }
        rankingPokemon.setItem(rankingList);
    }
    
    
  return (
    <div className="container">
        <Pokemon name={pokemonPrincipal.name} img={pokemonPrincipal.sprites.front_default} hp={pokemonSelectedHP} attack={pokemonSelectedAttack}/>
        <Pokemon name={pokemonContender.name} img={pokemonContender.url} hp={pokemonRankingHP} attack={pokemonRankingAttack}/>
    </div>
  )
}
