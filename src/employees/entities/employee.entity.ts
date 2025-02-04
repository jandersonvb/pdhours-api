import { Squad } from "src/squads/entities/squad.entity";
import { Report } from "src/reports/entities/report.entity";

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int', default: 8  })
  estimatedHours: number;

  @ManyToOne(() => Squad, squad => squad.id)
  @JoinColumn()
  squad: Squad;

  @OneToMany(() => Report, report => report.employee)
  reports: Report[];
}
