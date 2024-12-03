import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('CreateTestUser');
  
  try {
    // Create NestJS application
    const app = await NestFactory.create(AppModule);
    logger.log('NestJS application created');

    // Get users service
    const usersService = app.get(UsersService);

    // Create test user data
    const password = 'password123';
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const testUser = {
      email: 'test@example.com',
      password: hashedPassword,
      firstName: 'Test',
      lastName: 'User',
      isActive: true,
    };

    try {
      // Try to find existing user first
      const existingUser = await usersService.findByEmail(testUser.email);
      
      if (existingUser) {
        logger.log('Test user already exists:', existingUser.email);
      } else {
        // Create new user if doesn't exist
        const user = await usersService.create(testUser);
        logger.log('Test user created successfully:', {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        });
      }
    } catch (error) {
      logger.error('Error creating test user:', error);
    }

    await app.close();
    logger.log('Application closed');
  } catch (error) {
    logger.error('Bootstrap error:', error);
  }
}

bootstrap();
