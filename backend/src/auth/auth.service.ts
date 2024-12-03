import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      this.logger.log(`Attempting to validate user with email: ${email}`);

      const user = await this.usersService.findByEmail(email);
      if (!user) {
        this.logger.warn(`User not found with email: ${email}`);
        throw new UnauthorizedException('Invalid email or password');
      }

      this.logger.log('User found, validating password...');
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (!isPasswordValid) {
        this.logger.warn('Invalid password provided');
        throw new UnauthorizedException('Invalid email or password');
      }

      this.logger.log('Password validation successful');
      const { password: _, ...result } = user;
      return result;
    } catch (error) {
      this.logger.error(`Authentication error: ${error.message}`, error.stack);
      throw new UnauthorizedException('Authentication failed');
    }
  }

  async login(user: any) {
    try {
      this.logger.log(`Generating JWT token for user: ${user.email}`);
      
      const payload = { 
        email: user.email, 
        sub: user.id,
        firstName: user.firstName,
        lastName: user.lastName 
      };

      const access_token = this.jwtService.sign(payload);
      this.logger.log('JWT token generated successfully');

      return {
        access_token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      };
    } catch (error) {
      this.logger.error(`Login error: ${error.message}`, error.stack);
      throw new UnauthorizedException('Login failed');
    }
  }

  async register(userData: any) {
    try {
      this.logger.log(`Attempting to register new user with email: ${userData.email}`);
      
      // Hash password before creating user
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);
      
      this.logger.log('Password hashed successfully');
      
      const user = await this.usersService.create({
        ...userData,
        password: hashedPassword,
      });

      this.logger.log(`User registered successfully: ${user.email}`);
      
      // Remove password from response
      const { password: _, ...result } = user;
      return result;
    } catch (error) {
      this.logger.error(`Registration error: ${error.message}`, error.stack);
      throw error;
    }
  }
}
