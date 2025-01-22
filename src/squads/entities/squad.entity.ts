import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Squad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
