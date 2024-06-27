import { Module } from '@nestjs/common';
import { PokemonService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonsController],
  providers: [PokemonService],
  imports: [TypeOrmModule.forFeature([Pokemon])]
})
export class PokemonsModule {}
