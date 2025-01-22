import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SquadsModule } from './squads/squads.module';

@Module({
  imports: [SquadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
