import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(LocalStrategy.name);

  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: false
    });
    this.logger.log('LocalStrategy initialized');
  }

  async validate(email: string, password: string): Promise<any> {
    try {
      this.logger.log(`Attempting to validate user with email: ${email}`);

      if (!email || !password) {
        this.logger.warn('Missing credentials in validate method');
        throw new UnauthorizedException('Email and password are required');
      }

      const user = await this.authService.validateUser(email, password);
      
      if (!user) {
        this.logger.warn(`User validation failed for email: ${email}`);
        throw new UnauthorizedException('Invalid credentials');
      }

      this.logger.log(`User validation successful for email: ${email}`);
      return user;
    } catch (error) {
      this.logger.error(`Authentication error in validate method: ${error.message}`, error.stack);
      throw error;
    }
  }
}
