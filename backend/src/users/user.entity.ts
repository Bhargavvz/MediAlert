import { Entity, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import * as bcrypt from 'bcrypt';
import { Logger } from '@nestjs/common';

@Entity('users')
export class User extends BaseEntity {
  private readonly logger = new Logger(User.name);

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ type: 'jsonb', nullable: true })
  preferences: any;

  @Column({ default: true })
  isActive: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    try {
      if (this.password) {
        this.logger.log('Hashing password before save');
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        this.logger.log('Password hashed successfully');
      }
    } catch (error) {
      this.logger.error('Error hashing password:', error.stack);
      throw error;
    }
  }

  async validatePassword(password: string): Promise<boolean> {
    try {
      this.logger.log('Validating password');
      const isValid = await bcrypt.compare(password, this.password);
      this.logger.log(`Password validation result: ${isValid}`);
      return isValid;
    } catch (error) {
      this.logger.error('Error validating password:', error.stack);
      throw error;
    }
  }
}
