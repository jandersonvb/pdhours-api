import { IsNumber, IsDateString } from 'class-validator';

export class SquadReportDto {
  @IsNumber()
  squadId: number;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;
}
