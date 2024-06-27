import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemons/pokemons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemons/entities/pokemon.entity';
import { BattleModule } from './battles/battles.module';
import { Battle } from './battles/entities/battle.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database:'challengeDB.sqlite',
    entities: [Pokemon, Battle],
    synchronize: true
  }), PokemonsModule, BattleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
