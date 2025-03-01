import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SquadsModule } from './squads/squads.module';
import { EmployeesModule } from './employees/employees.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna as variáveis de ambiente acessíveis globalmente
      envFilePath: '.env', // Especifica o caminho do arquivo .env
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Importa o ConfigModule
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST') || 'localhost',
        port: configService.get<number>('DB_PORT') || 3306,
        username: configService.get<string>('DB_USERNAME') || 'root',
        password: configService.get<string>('DB_PASSWORD') || 'root',
        database: configService.get<string>('DB_NAME') || 'nest',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true
      }),
      inject: [ConfigService], // Injeta o ConfigService
    }),
    SquadsModule,
    EmployeesModule,
    ReportsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
