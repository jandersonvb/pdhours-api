import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SquadsService } from './squads.service';
import { CreateSquadDto } from './dto/create-squad.dto';
import { UpdateSquadDto } from './dto/update-squad.dto';
import { SquadReportDto } from './dto/squad-report.dto';

@Controller('/squad')
export class SquadsController {
  constructor(private readonly squadsService: SquadsService) { }
  
  @Get('/:id/hours-by-member')
  async getHoursByMember(@Param() params: Pick<SquadReportDto, 'squadId'>, @Query() query: Omit<SquadReportDto, 'squadId'>): Promise<any[]> {
    return await this.squadsService.getHoursByMember(params.squadId, query.startDate, query.endDate);
  }

  @Get('/:id/total-hours')
  async getTotalHours(@Param() params: Pick<SquadReportDto, 'squadId'>, @Query() query: Omit<SquadReportDto, 'squadId'>): Promise<number> {
    return await this.squadsService.getTotalHours(params.squadId, query.startDate, query.endDate);
  }

  @Get('/:id/average-hours')
  async getAverageHours(@Param() params: Pick<SquadReportDto, 'squadId'>, @Query() query: Omit<SquadReportDto, 'squadId'>): Promise<number> {
    return await this.squadsService.getAverageHours(params.squadId, query.startDate, query.endDate);
  }
  @Post()
  create(@Body() createSquadDto: CreateSquadDto) {
    return this.squadsService.create(createSquadDto);
  }

  @Get()
  findAll() {
    return this.squadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.squadsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSquadDto: UpdateSquadDto) {
    return this.squadsService.update(+id, updateSquadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.squadsService.remove(+id);
  }
}
