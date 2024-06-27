import React from 'react';
import { styled } from '@mui/material/styles';
import { IPokemon } from '../../helpers/interfaces/types';
import { Grid } from '@mui/material';
import pkbg from '../../assets/images/pkbg.jpg'; // Importa la imagen de fondo

interface PokemonItemProps {
  pokemon: IPokemon;
  onImageClick: (pokemon: IPokemon) => void;
}

const Img = styled('img')({
  width: '100px',
  height: '100px',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
});

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon, onImageClick }) => {
  return (
    <Grid item marginTop={5} onClick={() => onImageClick(pokemon)} marginX={2} boxShadow={5} borderRadius={5} sx={{
      backgroundImage: `url(${pkbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '10px',
      cursor: "pointer",
    }}>
      <Img 
        src={pokemon.imageUrl}
        alt={pokemon.name}
        
      />
    </Grid>
  );
};

export default PokemonItem;
