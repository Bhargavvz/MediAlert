import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { getConnection } from 'typeorm';
import { Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const logger = new Logger('DatabaseFix');
  try {
    // Create NestJS application
    const app = await NestFactory.create(AppModule);
    logger.log('NestJS application created');

    // Get database connection
    const connection = getConnection();
    
    // Read and execute the SQL file
    const sqlPath = path.join(__dirname, 'fix-database.sql');
    const sqlContent = fs.readFileSync(sqlPath, 'utf8');
    const queries = sqlContent.split(';').filter(query => query.trim());

    for (const query of queries) {
      if (query.trim()) {
        try {
          await connection.query(query);
          logger.log(`Successfully executed query: ${query.trim().slice(0, 50)}...`);
        } catch (error) {
          logger.error(`Error executing query: ${query.trim()}`);
          logger.error(error);
        }
      }
    }

    logger.log('Database fix completed');
    await app.close();
  } catch (error) {
    logger.error('Database fix failed:', error);
  }
}

bootstrap();
