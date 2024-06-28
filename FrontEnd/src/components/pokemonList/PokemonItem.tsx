import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import { IPokemon } from '../../helpers/interfaces/types';
import pikachu from '../../assets/images/Pikachu.png';
import charmander from '../../assets/images/Charmander.png';
import squirtle from '../../assets/images/Squirtle.png';
import bulbasur from '../../assets/images/Bulbasur.png';
import eevee from '../../assets/images/Eevee.png';

const obj = {
  Pikachu: pikachu,
  Charmander: charmander,
  Squirtle: squirtle,
  Bulbasur: bulbasur,
  Eevee: eevee
};

interface PokemonItemProps {
  pokemon: IPokemon;
  onImageClick: (pokemon: IPokemon) => void;
}

const Img = styled('img')(({ theme }) => ({
  width: '150px',
  height: '150px',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  display: 'block',
  margin: '0 auto',
  marginBottom: '-20px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down(1250)]: {
    width: '120px',
    height: '120px',
  },
  [theme.breakpoints.down(1050)]: {
    width: '96px', 
    height: '96px',
  },
}));

const NameImage = styled('img')(({ theme }) => ({
  width: '200px',
  height: 'auto',
  position: 'relative',
  zIndex: 0,
  display: 'block',
  margin: '0 auto',
  cursor: 'pointer',
  [theme.breakpoints.down(1250)]: {
    width: '160px', 
  },
  [theme.breakpoints.down(1050)]: {
    width: '128px', 
  },
}));

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon, onImageClick }) => {
  const backgroundImageUrl = obj[pokemon.name as keyof typeof obj] || '';

  return (
    <Grid item marginTop={5} onClick={() => onImageClick(pokemon)} marginX={2}>
      <Box position="relative" display="block" textAlign="center">
        <Img 
          src={pokemon.imageUrl}
          alt={pokemon.name}
        />
        <NameImage 
          src={backgroundImageUrl}
          alt={`${pokemon.name} background`}
        />
      </Box>
    </Grid>
  );
};

export default PokemonItem;
