import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SquadsService } from './squads.service';
import { CreateSquadDto } from './dto/create-squad.dto';
import { UpdateSquadDto } from './dto/update-squad.dto';

@Controller('/squad')
export class SquadsController {
  constructor(private readonly squadsService: SquadsService) { }

  @Get(':id/hours-by-member')
  async getHoursByMember(
    @Param('id') id: number,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.squadsService.getHoursByMember(id, startDate, endDate);
  }
  
  @Get(':id/total-hours')
  async getTotalHours(
    @Param('id') id: number,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.squadsService.getTotalHours(id, startDate, endDate);
  }
  
  @Get(':id/average-hours')
  async getAverageHours(
    @Param('id') id: number,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.squadsService.getAverageHours(id, startDate, endDate);
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
  async findOne(@Param('id') id: number) {
    return this.squadsService.findOne(+id, {
      relations: ['employees', 'employees.reports'], // Carrega membros e seus relatórios
    });
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
