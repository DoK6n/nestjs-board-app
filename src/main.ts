import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // AppModule이 있는 Application 생성
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
