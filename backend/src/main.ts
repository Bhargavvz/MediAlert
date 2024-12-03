import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  
  // Configure CORS
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Add global prefix
  app.setGlobalPrefix('api');

  const port = process.env.PORT || 4000;
  await app.listen(port);
  logger.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
