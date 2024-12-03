import { Controller, Post, Body, UseGuards, Request, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: any) {
    try {
      this.logger.log('Registration attempt with email: ' + registerDto.email);
      const user = await this.authService.register(registerDto);
      return {
        success: true,
        user,
        message: 'Registration successful'
      };
    } catch (error) {
      this.logger.error('Registration failed:', error);
      throw new HttpException({
        success: false,
        message: error.message || 'Registration failed. Please try again.',
        error: error.response || error.message
      }, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    try {
      this.logger.log('Login attempt');
      
      if (!req.user) {
        this.logger.error('Login failed: No user in request');
        throw new HttpException({
          success: false,
          message: 'Invalid credentials',
          error: 'Authentication failed'
        }, HttpStatus.UNAUTHORIZED);
      }

      const result = await this.authService.login(req.user);
      this.logger.log('Login successful for user: ' + req.user.email);
      return {
        success: true,
        ...result,
        message: 'Login successful'
      };
    } catch (error) {
      this.logger.error('Login failed:', error);
      throw new HttpException({
        success: false,
        message: error.message || 'Login failed. Please check your credentials.',
        error: error.response || error.message
      }, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
