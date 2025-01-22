import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SquadsModule } from './squads/squads.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [SquadsModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
