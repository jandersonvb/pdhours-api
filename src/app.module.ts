import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SquadsModule } from './squads/squads.module';
import { EmployeesModule } from './employees/employees.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [SquadsModule, EmployeesModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
