import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Battle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  winnerName: string;

  @Column()
  loserName: string;

  @Column()
  battleLog: string;
}