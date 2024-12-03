import { Injectable, Logger, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    try {
      this.logger.log(`Finding user by email: ${email}`);
      const user = await this.usersRepository.findOne({ where: { email } });
      if (!user) {
        this.logger.warn(`User not found with email: ${email}`);
      } else {
        this.logger.log('User found successfully');
      }
      return user;
    } catch (error) {
      this.logger.error(`Error finding user by email: ${error.message}`, error.stack);
      throw error;
    }
  }

  async findAll(): Promise<User[]> {
    try {
      this.logger.log('Finding all users');
      const users = await this.usersRepository.find();
      this.logger.log('Users found successfully');
      return users;
    } catch (error) {
      this.logger.error(`Error finding all users: ${error.message}`, error.stack);
      throw error;
    }
  }

  async findOne(id: string): Promise<User | undefined> {
    try {
      this.logger.log(`Finding user by id: ${id}`);
      const user = await this.usersRepository.findOne({ where: { id } });
      if (!user) {
        this.logger.warn(`User not found with id: ${id}`);
        throw new NotFoundException('User not found');
      }
      this.logger.log('User found successfully');
      return user;
    } catch (error) {
      this.logger.error(`Error finding user by id: ${error.message}`, error.stack);
      throw error;
    }
  }

  async create(userData: Partial<User>): Promise<User> {
    try {
      this.logger.log(`Creating new user with email: ${userData.email}`);
      
      // Check if user already exists
      const existingUser = await this.findByEmail(userData.email);
      if (existingUser) {
        this.logger.warn(`User already exists with email: ${userData.email}`);
        throw new ConflictException('User with this email already exists');
      }

      // Create new user instance
      const user = this.usersRepository.create(userData);
      
      // Save user to database
      const savedUser = await this.usersRepository.save(user);
      this.logger.log(`User created successfully with id: ${savedUser.id}`);
      
      return savedUser;
    } catch (error) {
      this.logger.error(`Error creating user: ${error.message}`, error.stack);
      throw error;
    }
  }

  async update(id: string, userData: Partial<User>): Promise<User> {
    try {
      this.logger.log(`Updating user with id: ${id}`);
      if (userData.email) {
        const existingUser = await this.findByEmail(userData.email);
        if (existingUser && existingUser.id !== id) {
          this.logger.warn(`Email already exists: ${userData.email}`);
          throw new ConflictException('Email already exists');
        }
      }

      await this.usersRepository.update(id, userData);
      const updatedUser = await this.usersRepository.findOne({ where: { id } });
      this.logger.log(`User updated successfully with id: ${updatedUser.id}`);
      return updatedUser;
    } catch (error) {
      this.logger.error(`Error updating user: ${error.message}`, error.stack);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      this.logger.log(`Deleting user with id: ${id}`);
      const user = await this.findOne(id);
      if (user) {
        await this.usersRepository.delete(id);
        this.logger.log(`User deleted successfully with id: ${id}`);
      }
    } catch (error) {
      this.logger.error(`Error deleting user: ${error.message}`, error.stack);
      throw error;
    }
  }
}
