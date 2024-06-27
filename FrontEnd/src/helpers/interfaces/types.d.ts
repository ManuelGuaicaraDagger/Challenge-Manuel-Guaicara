export interface IPokemon {
    id: string;
    name: string;
    attack: number;
    defense: number;
    hp: number;
    speed: number;
    imageUrl: string
  }

export interface ISelectedPokemonDetailProps {
    pokemon: Pokemon;
  }

export interface IBattleResult {
  winnerName: string;
  loserName: string;
  battleLog: string;
  id: number;
}