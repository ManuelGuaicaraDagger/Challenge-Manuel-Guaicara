import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from 'src/pokemons/entities/pokemon.entity';
import { Repository } from 'typeorm';
import { Battle } from './entities/battle.entity';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>,
  ) {}

  async startBattle(selectedPokemonId: string, opponentPokemonId: string): Promise<Battle> {
    const selectedPokemon = await this.pokemonRepository.findOne({ where: { id: selectedPokemonId } });
    const opponentPokemon = await this.pokemonRepository.findOne({ where: { id: opponentPokemonId } });

    if (!selectedPokemon || !opponentPokemon) {
      throw new Error('One or both Pokemons not found');
    }

    let attacker = selectedPokemon;
    let defender = opponentPokemon;

    if (selectedPokemon.speed < opponentPokemon.speed ||
      (selectedPokemon.speed === opponentPokemon.speed && selectedPokemon.attack < opponentPokemon.attack)) {
      attacker = opponentPokemon;
      defender = selectedPokemon;
    }

    let battleLog = '';

    while (selectedPokemon.hp > 0 && opponentPokemon.hp > 0) {
      const damage = Math.max(attacker.attack - defender.defense, 1);
      defender.hp -= damage;
      battleLog += `${attacker.name} attacks ${defender.name} for ${damage} damage. ${defender.name} has ${defender.hp} HP left.\n`;

      [attacker, defender] = [defender, attacker];
    }

    const winner = selectedPokemon.hp > 0 ? selectedPokemon : opponentPokemon;
    const loser = selectedPokemon.hp > 0 ? opponentPokemon : selectedPokemon;

    const battle = this.battleRepository.create({
      winnerName: winner.name,
      loserName: loser.name,
      battleLog,
    });

    return this.battleRepository.save(battle);
  }
  async findAllBattles(): Promise<Battle[]> {
    return this.battleRepository.find();
  }
}
