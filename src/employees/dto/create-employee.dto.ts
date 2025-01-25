import { IsInt, IsString, Max, Min } from "class-validator";

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(1)
  @Max(12)
  estimatedHours: number;

  @IsInt()
  squadId: number;
}
