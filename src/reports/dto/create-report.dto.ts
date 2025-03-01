import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { CreateDateColumn } from "typeorm";

export class CreateReportDto {
    @IsString()
    @MaxLength(255)
    description: string;
        
    @IsInt()
    employeeId: number;

    @IsInt()
    @IsNotEmpty()
    spentHours: number;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}
