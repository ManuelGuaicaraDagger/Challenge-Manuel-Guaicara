export interface Pokemon {
    id: string;
    name: string;
    attack: number;
    defense: number;
    hp: number;
    speed: number;
    imageUrl: string
  }

export interface SelectedPokemonDetailProps {
    pokemon: Pokemon;
  }

export interface BattleResult {
  winnerName: string;
  loserName: string;
  battleLog: string;
  id: number;
}