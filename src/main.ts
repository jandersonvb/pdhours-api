import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Permite todas as origens
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
