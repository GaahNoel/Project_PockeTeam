import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Header from '../../components/header';

import './styles.css';

// import { Container } from './styles';
interface pokemonTypes {
    types: object,
    moves: object,
    stats: object,
    sprites: object
}

interface statsTypes{
    stat: [{}]
}

const SelectPokemon: React.FC = () => {
    
    const [pokemon, setPokemon] = useState<any | any>({});

    const [pokemonName, setPokemonName] = useState("");

    /*useEffect(() => {
        if(pokemonName)
        {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(Response => {
            

            const {types, moves, stats, sprites} = Response.data;
            setPokemon({
                    types, moves, stats, sprites
                }
            )
        });
        }   
    },[pokemonName])*/ 

    const changePokemon = (e: any) =>{
        if(e){
            console.log(e.target.value)

            axios.get(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`).then(response => {
            
            console.log(response.data)
            
            const {types, moves, stats, sprites} = response.data;
            setPokemon({
                    types, moves, stats, sprites
                }
            )
        });
        }   
     }

    const options = [
        { value: 'charmander', label: "Charmander" },
        { value: 'charmeleon', label: "Charmeleon" }
    ]

  return(
        <div className="selectPokemonContainer">
            <Helmet>
                <title>Pokemania - Select Pokémon</title>
            </Helmet>
            <Header />

            <div className="selectBody">
                <h3>SELEÇÃO DE POKÉMON</h3>
                
                <form>
             
                    
                    <select name="select" onChange={changePokemon}>
                        <option value="" selected disabled>Selecione um pokémon...</option> 
                        <option value="charmander" >Charmander</option> 
                        <option value="charmeleon" >Charmeleon</option>
                    </select>
                </form>

            </div>
        </div>
  );
}

export default SelectPokemon;