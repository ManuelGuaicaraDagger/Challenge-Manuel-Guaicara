import React from 'react';
import { styled } from '@mui/material/styles';
import { IPokemon } from '../../helpers/interfaces/types';
import { Grid, Box } from '@mui/material';
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

const Img = styled('img')({
  width: '150px',
  height: '150px',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  display: 'block',
  margin: '0 auto',
  marginBottom: '-20px', // Adjust the overlap
  transition: 'transform 0.3s', // Smooth transition for the hover effect
  '&:hover': {
    transform: 'scale(1.1)', // Scale the image up a bit
  },
});

const NameImage = styled('img')({
  width: '200px',
  height: 'auto',
  position: 'relative',
  zIndex: 0,
  display: 'block',
  margin: '0 auto',
  cursor: 'pointer',
});

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
