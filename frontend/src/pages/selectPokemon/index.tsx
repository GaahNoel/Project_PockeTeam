import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Header from '../../components/header';

import './styles.css';
import imageInterrogation from './interrogation.png'
import { SportsCricketSharp } from '@material-ui/icons';
import { Container } from '@material-ui/core';

// import { Container } from './styles';

const SelectPokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<any | any>({});
  const [pokemonName, setPokemonName] = useState('');
  
  const options = [
    { value: 'charmander', label: 'Charmander' },
    { value: 'charmeleon', label: 'Charmeleon' },
  ];

  const [movesArray, setMovesArray]: any = useState([]);
  const [itemsArray, setItemsArray]: any = useState([]);
  
  /*Seleções de moves*/
  const [move1, setMove1]: any = useState('');
  const [move2, setMove2]: any = useState('');
  const [move3, setMove3]: any = useState('');
  const [move4, setMove4]: any = useState('');
  
  


  const changePokemon = (e: any) => {
    if (e) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${e.value}`)
        .then((response) => {
          const { types, moves, stats, sprites } = response.data;

          setPokemon({
            types,
            moves,
            stats,
            sprites,
          });

          setPokemonName(e.value);
          moves.forEach((move: any) => {
            setMovesArray((oldMoves: any) => [
              ...oldMoves,
              { value: move.move.url, label: move.move.name },
            ]);
          });
        });

          axios.get(`https://pokeapi.co/api/v2/item-attribute/holdable-active`).then((response) => {
            const {items} = response.data;

            items.forEach((item: any) => {
              setItemsArray((oldItems: any) => [
                ...oldItems, 
                {value: item.name, label: item.name},
              ])
              
            });
          }
          )

    }
  };

  const requireMoveDetails = (e: any) => {


      if (e) {
        axios
          .get(e.value).then((response) => {
            const{accuracy, damage_class:{name: damage_type}, effect_chance, effect_entries, type:{name: type_name}, pp, power} = response.data
            const effect_name = (effect_entries[0].short_effect).replace("$effect_chance%", effect_chance)


          console.log(accuracy)
          console.log(damage_type)
          console.log(effect_chance)
          console.log(effect_name)
          console.log(type_name)
          console.log(pp)
          console.log(power)
          })
      }
  }

  const widthChange = {
    container:(provide: any, state: any) => ({
      ...provide,
      width:170,
    }),

    input:(provide: any, state: any) => ({
       
      paddingRight:25,
    })
  }

  return (
    <div className="selectPokemonContainer">
      <Helmet>
        <title>Pokemania - Select Pokémon</title>
      </Helmet>
      <Header />

      <div className="selectBody">
        <h3>SELEÇÃO DE POKÉMON</h3>
        <form>
          <Select options={options} onChange={changePokemon} name="pokemon" />
         
         {pokemonName?(<img src={pokemon.sprites.front_default} />):
         (<img src={imageInterrogation} />)
         }
           
          <div className="formMoves">
              <Select options={movesArray} name="move1" styles={widthChange} onChange={(e: any) => {requireMoveDetails(e); setMove1(e.label)}} isDisabled={pokemonName ? false:true}/>
              <Select options={movesArray} name="move2" onChange={(e: any) => {requireMoveDetails(e); setMove2(e.label)}} isDisabled={pokemonName ? false:true}/>
              <Select options={movesArray} name="move3" onChange={(e: any) => {requireMoveDetails(e); setMove3(e.label)}} isDisabled={pokemonName ? false:true}/>
              <Select options={movesArray} name="move4" onChange={(e: any) => {requireMoveDetails(e); setMove4(e.label)}} isDisabled={pokemonName ? false:true}/>
          </div>
          
          <div>
              <Select options={itemsArray} name="item" isDisabled={pokemonName ? false:true}/>
          </div>

          <button  onClick={(e)=>{
            e.preventDefault()
            console.log(move1)
            console.log(move2)
            console.log(move3)
            console.log(move4)
            }}></button>
        </form>
      </div>
    </div>
  );
};

export default SelectPokemon;
