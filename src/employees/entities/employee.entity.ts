import { Squad } from "src/squads/entities/squad.entity";

import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int', default: 8 })
  estimatedHours: number;

  @ManyToOne(() => Squad, squad => squad.id)
  @JoinColumn()
  squad: Squad;
}
