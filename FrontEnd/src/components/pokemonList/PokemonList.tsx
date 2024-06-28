import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Grid, Box, Typography, styled } from '@mui/material';
import { IBattleResult, IPokemon } from '../../helpers/interfaces/types';
import PokemonItem from './PokemonItem';
import SelectedPokemonActions from './SelectedPokemonActions';
import BattleResult from '../battleResult/BattleResult';
import WaitingCard from './WaitingCard';

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

  const animateOpponentPokemon = async () => {
    for (const pokemon of pokemons) {
      setOpponentPokemon(pokemon);
      await new Promise(resolve => setTimeout(resolve, 200)); 
    }
    setOpponentPokemon(null); 
  };

  const handleStartBattleClick = () => {
    if (selectedPokemon) {
      setBattleResult(null);
      animateOpponentPokemon().then(() => {
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
          })
          .catch(error => {
            console.error('Error starting battle:', error);
          });
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const ResponsiveBox = styled(Box)(({ theme }) => ({
    minHeight: '100px',
    width: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      width: '210px', 
    },
    [theme.breakpoints.down('md')]: {
      width: '147px', 
    },
  }));

  const ResponsiveGridContainer = styled(Grid)(({ theme }) => ({
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', 
    },
  }));

  return (
    <main>
      <Typography align='center' variant='h4' color="#045DA0" fontWeight="bold" sx={{
    fontSize: '2.4rem', 
    '@media (max-width: 850px)': {
      fontSize: '1.44rem', 
    },
    '@media (max-width: 520px)': {
      fontSize: '1rem', 
    },
  }}>Select your Pokemon</Typography>
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
        <Box minHeight="100px" minWidth="30%" display="flex" justifyContent="center" alignItems="center">
          {battleResult ? (
            <BattleResult battleResult={battleResult} />
          ) : (
            <Box minHeight="100px" minWidth="30%"></Box>
          )}
        </Box>
      </Grid>
      <ResponsiveGridContainer container direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <ResponsiveBox minHeight="100px" width="300px" display="flex" justifyContent="center" alignItems="center">
          {selectedPokemon ? (
            <SelectedPokemonActions selectedPokemon={selectedPokemon} />
          ) : (
            <WaitingCard />
          )}
        </ResponsiveBox>
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
        <ResponsiveBox minHeight="100px" width="300px" display="flex" justifyContent="center" alignItems="center">
          {opponentPokemon ? (
            <SelectedPokemonActions selectedPokemon={opponentPokemon} />
          ) : (
            <WaitingCard />
          )}
        </ResponsiveBox>
      </ResponsiveGridContainer>
    </main>
  );
}

export default PokemonList;
