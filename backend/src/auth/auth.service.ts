import { Injectable, UnauthorizedException, ConflictException, BadRequestException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    try {
      const { email, password, firstName, lastName } = registerDto;
      
      // Check if user exists
      const existingUser = await this.userRepository.findOne({ 
        where: { email: email.toLowerCase() } 
      });
      
      if (existingUser) {
        this.logger.warn(`Registration failed: Email ${email} already exists`);
        throw new ConflictException('Email already registered');
      }

      // Validate password
      if (password.length < 6) {
        throw new BadRequestException('Password must be at least 6 characters long');
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create new user
      const user = this.userRepository.create({
        email: email.toLowerCase(),
        password: hashedPassword,
        firstName,
        lastName,
      });
      
      await this.userRepository.save(user);
      this.logger.log(`User registered successfully: ${email}`);
      
      // Generate token
      const token = this.generateToken(user);
      
      return { 
        user: this.sanitizeUser(user),
        token,
      };
    } catch (error) {
      this.logger.error(`Registration error: ${error.message}`);
      throw error;
    }
  }

  async login(loginDto: LoginDto) {
    try {
      const { email, password } = loginDto;
      
      this.logger.log(`Attempting login for email: ${email}`);
      
      // Find user
      const user = await this.userRepository.findOne({ 
        where: { email: email.toLowerCase() },
        select: ['id', 'email', 'password', 'firstName', 'lastName', 'isEmailVerified'] // Explicitly select password
      });
      
      if (!user) {
        this.logger.warn(`Login failed: User not found for email ${email}`);
        throw new UnauthorizedException('Invalid credentials');
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        this.logger.warn(`Login failed: Invalid password for email ${email}`);
        throw new UnauthorizedException('Invalid credentials');
      }

      // Update last login
      user.lastLoginAt = new Date();
      await this.userRepository.save(user);

      // Generate token
      const token = this.generateToken(user);
      
      this.logger.log(`User logged in successfully: ${email}`);
      
      return {
        user: this.sanitizeUser(user),
        token,
      };
    } catch (error) {
      this.logger.error(`Login error: ${error.message}`, error.stack);
      throw error;
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findOne({ 
      where: { email: email.toLowerCase() } 
    });
    
    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return this.sanitizeUser(user);
  }

  private generateToken(user: User): string {
    return this.jwtService.sign({ 
      id: user.id, 
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  }

  private sanitizeUser(user: User) {
    const { password, ...sanitizedUser } = user;
    return sanitizedUser;
  }
}
