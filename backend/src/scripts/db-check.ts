import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { getConnection } from 'typeorm';
import { UsersService } from '../users/users.service';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('DatabaseCheck');
  try {
    // Create NestJS application
    const app = await NestFactory.create(AppModule);
    logger.log('NestJS application created');

    // Get database connection
    const connection = getConnection();
    const isConnected = connection.isConnected;
    logger.log(`Database connection status: ${isConnected ? 'Connected' : 'Not connected'}`);

    if (isConnected) {
      // Get users service
      const usersService = app.get(UsersService);

      // Create test user
      const testUser = {
        email: 'test@example.com',
        password: 'password123',
        firstName: 'Test',
        lastName: 'User',
        isActive: true,
      };

      try {
        const user = await usersService.create(testUser);
        logger.log('Test user created successfully:', user);
      } catch (error) {
        if (error.code === '23505') { // Unique violation
          logger.log('Test user already exists');
          
          // Try to authenticate with existing user
          const existingUser = await usersService.findByEmail('test@example.com');
          if (existingUser) {
            logger.log('Found existing test user:', existingUser.email);
          }
        } else {
          logger.error('Error creating test user:', error);
        }
      }
    }

    await app.close();
  } catch (error) {
    logger.error('Database check failed:', error);
  }
}

bootstrap();
