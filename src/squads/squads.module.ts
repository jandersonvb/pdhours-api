import { Module } from '@nestjs/common';
import { SquadsService } from './squads.service';
import { SquadsController } from './squads.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Squad } from './entities/squad.entity';
import { Report } from 'src/reports/entities/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Squad, Report])],
  controllers: [SquadsController],
  providers: [SquadsService],
})
export class SquadsModule {}
