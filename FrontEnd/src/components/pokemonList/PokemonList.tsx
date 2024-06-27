import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IBattleResult, IPokemon } from '../../helpers/interfaces/types';
import PokemonItem from './PokemonItem';
import SelectedPokemonActions from './SelectedPokemonActions';
import BattleResult from '../battleResult/BattleResult';
import { Button, Grid, Box, Typography } from '@mui/material';

const PokemonList: React.FC = (): React.ReactElement => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);
  const [opponentPokemon, setOpponentPokemon] = useState<IPokemon | null>(null);
  const [battleResult, setBattleResult] = useState<IBattleResult | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pokemons');
        setPokemons(response.data);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const handleImageClick = (pokemon: IPokemon) => {
    setSelectedPokemon(pokemon);
    setOpponentPokemon(null);
    setBattleResult(null);
  };

  const handleStartBattleClick = () => {
    if (selectedPokemon) {
      let randomPokemon: IPokemon | null = null;
      while (!randomPokemon || randomPokemon.id === selectedPokemon.id) {
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        randomPokemon = pokemons[randomIndex];
      }
      setOpponentPokemon(randomPokemon);

      const battleData = {
        selectedPokemonId: selectedPokemon.id,
        opponentPokemonId: randomPokemon.id,
      };

      axios.post('http://localhost:3000/battles', battleData)
        .then(response => {
          setBattleResult(response.data);
          console.log('Battle started:', response.data);
        })
        .catch(error => {
          console.error('Error starting battle:', error);
        });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <Typography align='center' variant='h4'>Select your Pokemon</Typography>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
        {pokemons.map(pokemon => (
          <PokemonItem 
            key={pokemon.id} 
            pokemon={pokemon} 
            onImageClick={handleImageClick} 
          />
        ))}
      </Grid>
      <Grid container justifyContent="center">
        <Box minHeight="100px" minWidth="200px" display="flex" justifyContent="center" alignItems="center">
          {battleResult ? (
            <BattleResult battleResult={battleResult} />
          ) : (
            <Box minHeight="100px" minWidth="200px"></Box>
          )}
        </Box>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <Box minHeight="100px" minWidth="200px" display="flex" justifyContent="center" alignItems="center">
          {selectedPokemon ? (
            <SelectedPokemonActions selectedPokemon={selectedPokemon} />
          ) : (
            <Box minHeight="100px" minWidth="200px"></Box>
          )}
        </Box>
        <Box minHeight="50px" minWidth="200px" display="flex" justifyContent="center" alignItems="center">
          {selectedPokemon ? (
            <Button 
              onClick={handleStartBattleClick} 
              className="start-battle-button"
              variant="contained"
              color="success"
            >
              Start Battle
            </Button>
          ) : (
            <Box minHeight="50px" minWidth="200px"></Box>
          )}
        </Box>
        <Box minHeight="100px" minWidth="200px" display="flex" justifyContent="center" alignItems="center">
          {opponentPokemon ? (
            <SelectedPokemonActions selectedPokemon={opponentPokemon} />
          ) : (
            <Box minHeight="100px" minWidth="200px"></Box>
          )}
        </Box>
      </Grid>
    </main>
  );
}

export default PokemonList;
