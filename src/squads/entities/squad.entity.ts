import { Employee } from '../../employees/entities/employee.entity';
import { Report } from '../../reports/entities/report.entity';

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity('squads')
export class Squad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Employee, (employee) => employee.squad)
  employees: Employee[];

  @OneToMany(() => Report, (report) => report.squad)
  reports: Report[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
