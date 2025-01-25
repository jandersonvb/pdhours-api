import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateSquadDto } from './dto/create-squad.dto';
import { UpdateSquadDto } from './dto/update-squad.dto';


import { Squad } from './entities/squad.entity';
import { Report } from '../reports/entities/report.entity';

@Injectable()
export class SquadsService {
  constructor(
    @InjectRepository(Squad)
    private readonly squadRepository: Repository<Squad>,
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
  ) { }

  async getHoursByMember(squadId: number, startDate: string, endDate: string): Promise<any[]> {
    const reports = await this.reportRepository
      .createQueryBuilder('report') //Cria uma query builder
      .leftJoinAndSelect('report.employee', 'employee') // Junta a tabela de reports com a tabela de employees
      .where('employee.squadId = :squadId', { squadId }) //Onde o funcionário pertence ao squad
      .andWhere('report.createdAt BETWEEN :startDate AND :endDate', { startDate, endDate }) //E a data do report está entre o intervalo
      .select('employee.name', 'name') //Seleciona o nome do funcionário
      .addSelect('SUM(report.spentHours)', 'totalHours')//Seleciona a soma das horas gastas
      .groupBy('employee.id') //Agrupa por funcionário
      .getRawMany(); //Retorna um array de objetos
      
    return reports; //Retorna o array de objetos
  }

  async getTotalHours(squadId: number, startDate: string, endDate: string): Promise<number> {
    const totalHours = await this.reportRepository
      .createQueryBuilder('report')
      .leftJoinAndSelect('report.employee', 'employee')
      .where('employee.squadId = :squadId', { squadId })
      .andWhere('report.createdAt BETWEEN :startDate AND :endDate', { startDate, endDate })
      .select('SUM(report.spentHours)', 'totalHours')
      .getRawOne();
    return totalHours.totalHours || 0;
  }

  async getAverageHours(squadId: number, startDate: string, endDate: string): Promise<number> {
    const totalHours = await this.getTotalHours(squadId, startDate, endDate); //Chama a função getTotalHours

    const days = (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24); // Calcula a diferença de dias entre as datas
    
    return days ? totalHours / days : 0; //Retorna a média de horas
  }



  async create(createSquadDto: CreateSquadDto): Promise<Squad> {
    const newSquad = this.squadRepository.create(createSquadDto);

    return await this.squadRepository.save(newSquad);
  }

  async findAll(): Promise<Squad[]> {
    return await this.squadRepository.find();
  }

  async findOne(id: number): Promise<Squad> {
    const squad = await this.squadRepository.findOne({ where: { id } });

    if (!squad) {
      throw new NotFoundException(`Squad with id ${id} not found`);
    }

    return squad;
  }

  async update(id: number, updateSquadDto: UpdateSquadDto): Promise<Squad> {
    const squad = await this.findOne(id);

    const updatedSquad = Object.assign(squad, updateSquadDto);

    return await this.squadRepository.save(updatedSquad);
  }

  async remove(id: number): Promise<void> {
    const squad = await this.findOne(id);

    await this.squadRepository.remove(squad);
  }
}
