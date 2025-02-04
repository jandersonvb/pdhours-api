import { Employee } from "src/employees/entities/employee.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(() => Employee, (employee) => employee.id)
  @JoinColumn()
  employee: Employee;

  @Column({ type: 'int' })
  spentHours: number;

  @CreateDateColumn()
  createdAt: Date;
}
