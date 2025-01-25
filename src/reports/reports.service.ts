import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './entities/report.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
  ) { }

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const newReport = this.reportRepository.create(createReportDto);

    return await this.reportRepository.save(newReport);
  }

  async findAll(): Promise<Report[]> {
    return await this.reportRepository.find();
  }

  async findOne(id: number): Promise<Report> {
    const report = await this.reportRepository.findOne({ where: { id } });

    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }

    return report;
  }

  async update(id: number, updateReportDto: UpdateReportDto): Promise<Report> {
    const report = await this.findOne(id);

    const updatedReport = Object.assign(report, updateReportDto);

    return await this.reportRepository.save(updatedReport);
  }

  async remove(id: number): Promise<void> {
    const report = await this.findOne(id);
    
    await this.reportRepository.remove(report);
  }
}
