import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';
import { NewsletterModule } from './newsletter/newsletter.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'Nani2005'),
        database: configService.get('DB_NAME', 'medialert'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // Set to false in production
        logging: true,
        ssl: false,
        autoLoadEntities: true,
        retryAttempts: 3,
        retryDelay: 3000,
        keepConnectionAlive: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    ContactModule,
    NewsletterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
