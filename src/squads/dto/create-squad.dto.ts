import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSquadDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}