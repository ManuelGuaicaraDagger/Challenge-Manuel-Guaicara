import React from 'react';
import { SelectedPokemonDetailProps } from '../../helpers/interfaces/types';



const SelectedPokemonDetail: React.FC<SelectedPokemonDetailProps> = ({ pokemon }): React.ReactElement => {
  return (
    <div>
      <h2>Selected Pokemon</h2>
      <p>{pokemon.name}</p>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
    </div>
  );
}

export default SelectedPokemonDetail;