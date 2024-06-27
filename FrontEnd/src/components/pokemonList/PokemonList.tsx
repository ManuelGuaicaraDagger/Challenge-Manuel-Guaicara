import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BattleResult, Pokemon } from '../../helpers/interfaces/types';
import SelectedPokemonDetail from '../selectedPokemon/selectedPokemon';

const PokemonList: React.FC = (): React.ReactElement => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [opponentPokemon, setOpponentPokemon] = useState<Pokemon | null>(null);
  const [battleResult, setBattleResult] = useState<BattleResult | null>(null); // Estado para almacenar el resultado de la batalla

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

  const handleImageClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setOpponentPokemon(null);  
    setBattleResult(null); // Limpiar resultado de la batalla al seleccionar un nuevo pokemon
  };

  const handleStartBattleClick = () => {
    if (selectedPokemon) {
      let randomPokemon: Pokemon | null = null;
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
          setBattleResult(response.data); // Almacenar el resultado de la batalla
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
    <div>
      <div>
        {pokemons.map(pokemon => (
          <div key={pokemon.id}>
            <img 
              src={pokemon.imageUrl} 
              alt={pokemon.name} 
              onClick={() => handleImageClick(pokemon)} 
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
      {selectedPokemon && (
        <div>
          <SelectedPokemonDetail pokemon={selectedPokemon} />
          <button onClick={handleStartBattleClick}>Start Battle</button>
        </div>
      )}
      {opponentPokemon && (
        <SelectedPokemonDetail pokemon={opponentPokemon} />
      )}
      {battleResult && (
        <div>
          <p>Winner: {battleResult.winnerName}</p>
          {/* Aquí puedes mostrar más detalles del resultado si es necesario */}
        </div>
      )}
    </div>
  );
}

export default PokemonList;

