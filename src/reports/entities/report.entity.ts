import { Employee } from '../../employees/entities/employee.entity';
import { Squad } from '../../squads/entities/squad.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reports')
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(() => Employee, (employee) => employee.reports)
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @ManyToOne(() => Squad, (squad) => squad.reports)
  @JoinColumn({ name: 'squadId' })
  squad: Squad;

  @Column({ type: 'int', name: 'spent_hours', default: 0 })
  spentHours: number;

  @CreateDateColumn()
  createdAt: Date;
}
