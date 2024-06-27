import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryColumn({ type: 'text', nullable: false })
  id: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'integer', nullable: false })
  attack: number;

  @Column({ type: 'integer', nullable: false })
  defense: number;

  @Column({ type: 'integer', nullable: false })
  hp: number;

  @Column({ type: 'integer', nullable: false })
  speed: number;

  @Column({ type: 'text', nullable: false })
  type: string;

  @Column({ type: 'text', nullable: false })
  imageUrl: string;
}