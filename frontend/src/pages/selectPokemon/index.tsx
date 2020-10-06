import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Header from '../../components/header';

import './styles.css';
import { error } from 'console';

// import { Container } from './styles';

const SelectPokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<any | any>({});
  const [pokemonName, setPokemonName] = useState('');
  const options = [
    { value: 'charmander', label: 'Charmander' },
    { value: 'charmeleon', label: 'Charmeleon' },
  ];
  const [movesArray, setMovesArray]: any = useState([]);

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
              { value: move.move.name, label: move.move.name },
            ]);
          });
        });
    }
  };

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
          {pokemonName ? (
            <Select options={movesArray} name="move" />
          ) : (
            <Select onChange={changePokemon} isDisabled />
          )}
        </form>
      </div>
    </div>
  );
};

export default SelectPokemon;
